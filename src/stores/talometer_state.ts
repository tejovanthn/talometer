import Talometer, { default_options } from "../talometer";
import { writable } from 'svelte/store';

const options = writable(default_options);
export const talometer = writable(new Talometer())

export const talometer_options = {
  ...options,
  setBPM: (value) => options.update(self => {
    self.bpm = value;
    return self
  }),
  setTalaVolume: (value) => options.update(self => {
    self.talaVolume = value;
    return self
  }),
  setTanpuraVolume: (value) => options.update(self => {
    self.tanpuraVolume = value;
    return self
  })
}
