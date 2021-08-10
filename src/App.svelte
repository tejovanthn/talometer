<script lang="ts">
  import Talometer, { default_options } from "./talometer";
  import { tala, jati, pitch } from "./constants";
  import Dropdown from "./components/Dropdown.svelte";

  const talometer_options = default_options;

  const on_tala_change = (data) => (talometer_options.tala = data);
  const on_jati_change = (data) => (talometer_options.jati = data);
  const on_pitch_change = (data) => (talometer_options.pitch = data);
  const on_bpm_change = (e) => (talometer_options.bpm = +e.target.value);

  let talometer = new Talometer(talometer_options);

  const handleClick = (e) => {
    switch (e.target.id) {
      case "start":
        talometer.update(talometer_options);
        talometer.play();
        break;
      default:
        talometer.stop();
        break;
    }
  };
</script>

<main>
  <Dropdown options={tala} onchange={on_tala_change} />
  <Dropdown options={jati} onchange={on_jati_change} />
  <Dropdown options={pitch} onchange={on_pitch_change} />
  <input type="number" on:change={on_bpm_change} value="60" />
  <button id="start" on:click={handleClick}>Start</button>
  <button id="stop" on:click={handleClick}>Stop</button>
</main>
