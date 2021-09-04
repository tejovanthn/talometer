import { writable } from 'svelte/store';

export const isPlaying = writable(false)
export const index = writable(-1)

export const indexOps = { increment: () => index.update(n => n + 1), reset: () => index.set(-1) }

let wakeLock = null
const requestWakeLock = async () => {
  try {
    wakeLock = await (navigator as any).wakeLock.request('screen');
  } catch (err) {
    console.log(err)
  }
}

isPlaying.subscribe(playing => {
  if (playing) {
    requestWakeLock()
  } else {
    if (wakeLock) {
      wakeLock.release()
        .then(() => {
          wakeLock = null;
        })
    }
  }
})