import Talometer, { default_options } from "../talometer";
import { writable } from 'svelte/store';

export const talometer_options = writable(default_options);
export const talometer = writable(new Talometer())
