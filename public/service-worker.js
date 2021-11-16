"use strict";
// Cache Name
const CACHE_NAME = "static-cache-v1";
// Cache Files
const FILES_TO_CACHE = [
	"./",
	"./about",
	"./history",
];


// install
self.addEventListener('install', function (event) {
	console.log("[ServiceWorker] Install");
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log("[ServiceWorker] Pre-caching offline page");
				return cache.addAll(FILES_TO_CACHE);
			})
	);
	self.skipWaiting();
});


self.addEventListener('fetch', (event) => {
	console.log("[ServiceWorker] Fetch", event.request.url);
	event.respondWith(
		caches.match(event.request)
			.then((response) => {
				// Cache hit - return response
				if (response) {
					return response;
				}

				return fetch(event.request).then((response) => {
					console.log("[ServiceWorker] Cache Miss :(");
					// Check if we received a valid response
					if (!response || response.status !== 200 || response.type !== 'basic') {
						return response;
					}

					// IMPORTANT: Clone the response. A response is a stream
					// and because we want the browser to consume the response
					// as well as the cache consuming the response, we need
					// to clone it so we have two streams.
					var responseToCache = response.clone();

					caches.open(CACHE_NAME)
						.then((cache) => {
							cache.put(event.request, responseToCache);
						});

					return response;
				});
			})
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME) {
						console.log("[ServiceWorker] Removing old cache", cacheName);
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});