import localforage from "localforage";

import { writable } from 'svelte/store';
import Talometer, { default_options } from "./talometer";

export const talometer_options = writable(default_options);
export const isPlaying = writable(false)
export const index = writable(-1)
export const talometer = writable(new Talometer())

export const indexOps = { increment: () => index.update(n => n + 1), reset: () => index.set(-1) }


export const store = localforage.createInstance({
  name: "talometer"
});

export const saveState = async (data) => {
  await store.setItem(
    JSON.stringify(data),
    Date.now().toString(),
  )
}
export const loadStates = async () => {
  const keys = await store.keys()
  const data = await Promise.all(keys.map(async key => {
    const value = await store.getItem(key)
    return {
      timestamp: value,
      ...(JSON.parse(key) as any),
    }
  }))
  return data
}