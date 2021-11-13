import * as Tone from "tone";
import { default_options as sequencer_default_options } from "./sequencer";
import { get_notes } from "./notes";

export const default_options = {
  ...sequencer_default_options,
  bpm: 60,
  talaVolume: 0,
  tanpuraVolume: -4,
  useSampler: false
}

export default class Talometer {
  private synth: Tone.Synth | Tone.Sampler;
  private seq: Tone.Sequence;
  private options = default_options
  private isPlaying: boolean = false;
  private nadai_index = -1
  private nextNote = () => { }

  private tampura: Tone.Sampler;
  private tampuraLoop: Tone.Loop;

  constructor(options = default_options) {
    this.tampura = new Tone.Sampler({
      urls: {
        "G4": "./sounds/tanpura-g4.mp3",
        "D3": "./sounds/tanpura-d3.mp3",
        "A#4": "./sounds/tanpura-a#4.mp3",
      },
      release: 1
    }).toDestination()

    this.update([], [], () => { }, options)
  }

  update(sequence = [], play = [], nextNote = () => { }, options = default_options) {
    this.options = { ...options }
    this.nextNote = nextNote

    if (options.useSampler) {
      this.synth = new Tone.Sampler({
        urls: {
          "G#4": "./sounds/up.mp3",
          "D#3": "./sounds/down.mp3"
        },
        release: 1,
      }).toDestination();
    } else {
      this.synth = new Tone.Synth().toDestination()
    }


    const notes_array = get_notes(sequence, play, this.options)
    const nadai_sequence = notes_array.map(letter => Array(options.nadai).fill(letter))

    // https://github.com/Tonejs/Tone.js/issues/580
    if (this.seq) {
      this.seq.dispose()
    }
    if (this.tampuraLoop) {
      this.tampuraLoop.dispose()
    }

    this.seq = new Tone.Sequence((time, note) => {
      this.nadai_index++
      if (this.nadai_index % this.options.nadai === 0) { this.nextNote() }
      if (note !== "K") this.synth.triggerAttackRelease(note, 0.1, time)
    }, nadai_sequence)

    this.tampuraLoop = new Tone.Loop((time) => {
      this.tampura.triggerAttackRelease(`${options.pitch}3`, `12s`, time)
    }, `1n`);

    this.synth.volume.value = this.options.talaVolume || default_options.talaVolume
    this.tampura.volume.value = this.options.tanpuraVolume || default_options.talaVolume
  }

  play() {
    Tone.getContext().resume().then(() => {
      Tone.Transport.bpm.value = this.options.bpm;
      this.seq.start(0)
      this.tampuraLoop.start(0)
      Tone.Transport.start();
      this.isPlaying = true;
    });
  }

  stop() {
    this.seq.dispose()
    this.tampuraLoop.dispose()
    this.tampura.volume.value = -999
    Tone.Transport.stop();
    this.nadai_index = -1
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