import * as Tone from "tone";

export default class Talometer {
    private synth: Tone.Synth;
    private isPlaying: boolean;
    
    constructor() {
        this.synth = new Tone.Synth().toDestination();
    }
    play() {
        const now = Tone.now()
        this.synth.triggerAttack("C4", now)
        this.isPlaying = true;
    }
    stop() {
        const now = Tone.now()
        this.synth.triggerRelease(now)
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