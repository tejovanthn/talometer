<script>
  import Dropdown from "../components/Dropdown.svelte";
  import { noteSets } from "../constants";
  import { talometer_options } from "../stores/talometer_state";
</script>

<Dropdown
  name="noteSets"
  options={noteSets}
  label={"Note Sets"}
  bind:value={$talometer_options.noteSets}
  makeName={(n) => `${n.value}`}
/>

<style></style>
