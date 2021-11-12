import * as Tone from "tone";
import { default_options as sequencer_default_options } from "./sequencer";
import { get_notes } from "./notes";

export const default_options = {
  ...sequencer_default_options,
  bpm: 60,
  useSampler: false
}

export default class Talometer {
  private synth: Tone.Synth | Tone.Sampler;
  private seq: Tone.Sequence;
  private options = default_options
  private isPlaying: boolean = false;
  private nadai_index = -1
  private nextNote = () => { }
  private vol: Tone.Volume;

  constructor(options = default_options) {
    this.vol = new Tone.Volume(1).toDestination();

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

    this.seq = new Tone.Sequence((time, note) => {
      this.nadai_index++
      if (this.nadai_index % this.options.nadai === 0) { this.nextNote() }
      if (note !== "K") this.synth.connect(this.vol).triggerAttackRelease(note, 0.1, time);
    }, nadai_sequence)
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