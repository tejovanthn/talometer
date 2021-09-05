<script>
  import { jati, pitch, tala, nadai } from "../constants";

  import { default_options } from "../sequencer";
  import Button from "./Button.svelte";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  dayjs.extend(relativeTime);

  export let options = default_options;
  export let onPlay;
  export let onDelete;
  export let isPlaying = false;
  export let lastPlayed = undefined;
</script>

<div class="panel">
  <div class="notes">
    <p>
      {jati.find((v) => v.id === options.jati).value}
      {tala.find((v) => v.id === options.tala).value}
      in {pitch.find((v) => v.id === options.pitch).id}
    </p>
    <p>
      {nadai.find((v) => v.id === options.nadai).value} nadai at {options.bpm} BPM
    </p>
  </div>
  <div class="controls">
    <Button id="play" classes="" clickHandler={onDelete}>Delete</Button>
    <Button id="delete" classes="primary" clickHandler={onPlay}
      >{isPlaying ? "Stop" : "Play"}</Button
    >
  </div>
  <div class="control-bar">
    <small>Note Set: {options.noteSets}</small>
    <small>Last played: {dayjs().to(dayjs(+lastPlayed))}</small>
  </div>
</div>

<style>
  .panel {
    display: grid;
    grid-template-areas:
      "notes notes controls"
      "control-bar control-bar control-bar";
  }
  .notes {
    grid-area: notes;
  }
  .controls {
    grid-area: controls;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  p {
    font-size: 1rem;
    margin: 0;
  }
  small {
    font-size: 0.8rem;
  }
</style>
