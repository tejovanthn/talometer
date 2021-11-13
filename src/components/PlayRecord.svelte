<script>
  import { jati, pitch, tala, nadai } from "../constants";

  import { default_options } from "../sequencer";
  import Button from "./Button.svelte";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import Textfield from "./Textfield.svelte";
  dayjs.extend(relativeTime);

  export let name = null;
  export let options = default_options;
  export let onPlay;
  export let onDelete;
  export let onEdited;
  export let isPlaying = false;
  export let lastPlayed = undefined;

  let isEditing = false;
  let value = "";
  const onEdit = () => {
    isEditing = !isEditing;
    if (!isEditing) {
      onEdited(value);
    }
  };
  const onchange = (v) => {
    value = v;
  };
</script>

<div class="panel">
  <div class="notes">
    {#if isEditing}
      <Textfield name="name" type="text" {value} {onchange} />
    {:else if name}
      <p>
        {name}
      </p>
    {:else}
      <p>
        {jati.find((v) => v.id === options.jati).value}
        {tala.find((v) => v.id === options.tala).value}
        in {pitch.find((v) => v.id === options.pitch).id}
      </p>
      <p>
        {nadai.find((v) => v.id === options.nadai).value} nadai at {options.bpm}
        BPM
      </p>
    {/if}
  </div>
  <div class="controls">
    <Button id="delete" classes="" clickHandler={onDelete}>Delete</Button>
    <Button clickHandler={onEdit}>{isEditing ? "Save" : "Edit"}</Button>
    <Button id="play" classes="primary" clickHandler={onPlay}
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
    grid-template-columns: 4fr 3fr;
    grid-template-areas:
      "notes controls"
      "control-bar  control-bar";
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
  .control-bar {
    grid-area: control-bar;
  }
  p {
    font-size: 1rem;
    margin: 0;
  }
  small {
    font-size: 0.8rem;
    display: block;
  }
</style>
