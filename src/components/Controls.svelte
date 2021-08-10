<script>
  import { tala, jati, pitch } from "../constants";
  import Dropdown from "./Dropdown.svelte";
  import Bpm from "./BPM.svelte";
  export let bindvalue;
</script>

<div class="flex flex-col">
  <Dropdown options={tala} label={"Tala"} bindvalue={bindvalue.tala} />
  <Dropdown options={jati} label={"Jati"} bindvalue={bindvalue.jati} />
  <Dropdown options={pitch} label={"Pitch"} bindvalue={bindvalue.pitch} />
  <Bpm bindvalue={bindvalue.bpm} />
</div>
