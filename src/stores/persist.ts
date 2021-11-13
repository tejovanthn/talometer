import localforage from "localforage";
import { writable } from 'svelte/store';

export const savedStates = writable([])

export const store = localforage.createInstance({
  name: "talapettige"
});

const formatData = (data) => {
  const { play, sequence, talometer_options, name = null } = data
  const { talaVolume, tanpuraVolume, ...rest } = talometer_options
  return { play, sequence, name, talometer_options: rest }
}

export const saveState = async (data) => {
  const saveData = formatData(data)
  console.log(saveData)
  await store.setItem(
    JSON.stringify(saveData),
    Date.now().toString(),
  )
  await loadStates()
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