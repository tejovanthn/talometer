import localforage from "localforage";

export const store = localforage.createInstance({
  name: "talometer"
});

export const saveState = async (data) => {
  await store.setItem(
    JSON.stringify(data),
    Date.now().toString(),
  )
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
  console.log(data)
  return data
}