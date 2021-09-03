<script>
  import { jati, pitch, tala, nadai } from "../constants";

  import { default_options } from "../sequencer";
  import Button from "./Button.svelte";

  export let options = default_options;
  export let onPlay;
  export let onDelete;
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
    <Button id="delete" classes="primary" clickHandler={onPlay}>Play</Button>
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
  }
</style>
