// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATvpYb-mEa7b8wgNMQ1nm3KB5flDb9kiM",
  authDomain: "talapettige.firebaseapp.com",
  projectId: "talapettige",
  storageBucket: "talapettige.appspot.com",
  messagingSenderId: "577025063425",
  appId: "1:577025063425:web:394d31b40cc724976e9e00",
  measurementId: "G-5PQMS5TD4Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const log = (eventName: any, eventParams: any) => logEvent(analytics, eventName, eventParams)
