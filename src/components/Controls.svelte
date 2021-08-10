<script>
  import { tala, jati, pitch } from "../constants";
  import Dropdown from "./Dropdown.svelte";
  import Bpm from "./BPM.svelte";
  export let options;
</script>

<div class="flex flex-col">
  <Dropdown options={tala} label={"Tala"} bind:value={options.tala} />
  <Dropdown options={jati} label={"Jati"} bind:value={options.jati} />
  <Dropdown options={pitch} label={"Pitch"} bind:value={options.pitch} />
  <Bpm bind:value={options.bpm} />
</div>
