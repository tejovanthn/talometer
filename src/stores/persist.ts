import localforage from "localforage";
import { writable } from 'svelte/store';

export const savedStates = writable([])

export const store = localforage.createInstance({
  name: "talapettige"
});


export const saveState = async (data) => {
  const { play, sequence, talometer_options } = data
  const { talaVolume, tanpuraVolume, ...rest } = talometer_options
  const saveData = { play, sequence, talometer_options: rest }
  await store.setItem(
    JSON.stringify(saveData),
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
  savedStates.set(data.sort((a, b) => (b.timestamp - a.timestamp)))
}

export const deleteState = async (record) => {
  const { timestamp, ...data } = record;
  await store.removeItem(JSON.stringify(data))
  await loadStates()
}