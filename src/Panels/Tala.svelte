<script>
  import Talometer, { default_options } from "../talometer";
  import { tala, jati, pitch } from "../constants";
  import Dropdown from "../components/Dropdown.svelte";
  import Bpm from "../components/BPM.svelte";
  import Panel from "../components/Panel.svelte";
  import Button from "../components/Button.svelte";

  let talometer_options = default_options;

  let isPlaying = false;
  const talometer = new Talometer(talometer_options);

  const handleClick = (e) => {
    switch (e.target.id) {
      case "playstop":
        talometer.update(talometer_options);
        talometer.toggle();
        isPlaying = !isPlaying;
        break;
    }
  };
</script>

<hr />
<Panel>
  <svelte:fragment slot="action">
    <Button classes="full primary" id="playstop" clickHandler={handleClick}
      >{!isPlaying ? "Play" : "Stop"}</Button
    >
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <Dropdown
      name="tala"
      options={tala}
      label={"Tala"}
      bind:value={talometer_options.tala}
    />
    <Dropdown
      name="jati"
      options={jati}
      label={"Jati"}
      bind:value={talometer_options.jati}
    />
    <Dropdown
      name="pitch"
      options={pitch}
      label={"Pitch"}
      bind:value={talometer_options.pitch}
    />
  </svelte:fragment>
  <svelte:fragment slot="control-bar">
    <Bpm bind:value={talometer_options.bpm} />
  </svelte:fragment>
</Panel>
<hr />

<style>
  hr {
    border: 0.5px solid var(--primary);
  }
</style>
