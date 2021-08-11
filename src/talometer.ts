import * as Tone from "tone";
import { pitch } from "./constants";

export const default_options = {
  tala: "IOO",
  jati: 4,
  bpm: 60,
  pitch: "G#",
  nextNote: () => { },
}

const MOVEMENT = { UP: "up", DOWN: "down" }

const get_laghu = (options = default_options) => {
  return [MOVEMENT.UP, ...Array(options.jati - 1).fill(MOVEMENT.DOWN)]
}

export const get_sequence = (options = default_options) => {

  const laghu = get_laghu(options)
  const dhrita = [MOVEMENT.UP, MOVEMENT.DOWN]
  const anudhrita = [MOVEMENT.UP]

  return options.tala.split('').map(letter => {
    switch (letter) {
      case 'I': return laghu;
      case 'O': return dhrita;
      case 'I': return anudhrita;
    }
  })
}
const get_notes = (options = default_options) => {
  const sequence = get_sequence(options).flat()
  const base_pitch_idx = pitch.findIndex(el => el.id === options.pitch)
  const pitch_map = {
    "up": pitch[base_pitch_idx].id,
    "down": pitch[(base_pitch_idx + 7) % 12].id
  }

  return sequence.map(letter => {
    switch (letter) {
      case MOVEMENT.UP: return `${pitch_map.up}4`
      case MOVEMENT.DOWN: return `${pitch_map.down}3`
    }
  })

}
export default class Talometer {
  private synth: Tone.Synth;
  private seq: Tone.Sequence;
  private options = default_options
  private isPlaying: boolean = false;

  constructor(options = default_options) {
    this.synth = new Tone.Synth().toDestination();
    this.update(options)
  }

  update(options = default_options) {
    this.options = { ...options }
    const sequence = get_notes(options)

    // https://github.com/Tonejs/Tone.js/issues/580
    if (this.seq) {
      this.seq.dispose()
    }

    this.seq = new Tone.Sequence((time, note) => {
      options.nextNote()
      console.log(`${note} ${time}`)
      this.synth.triggerAttackRelease(note, 0.1, time);
    }, sequence)
  }

  play() {
    Tone.getContext().resume().then(() => {
      Tone.Transport.bpm.value = this.options.bpm;
      this.seq.start(0)
      Tone.Transport.start();
      this.isPlaying = true;
    });
  }

  stop() {
    this.seq.dispose()
    Tone.Transport.stop();
    this.isPlaying = false;
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }
}