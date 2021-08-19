<script>
  import Talometer, { default_options } from "../talometer";
  import { get_sequence } from "../sequencer";
  import { tala, jati, nadai, pitch } from "../constants";
  import Dropdown from "../components/Dropdown.svelte";
  import Bpm from "../components/BPM.svelte";
  import Panel from "../components/Panel.svelte";
  import Button from "../components/Button.svelte";
  import Lights from "../components/Lights.svelte";
  import { loadStates, saveState } from "../store";

  let index = -1;
  const nextNote = () => index++;

  let talometer_options = { ...default_options };
  $: sequence = get_sequence(talometer_options);
  $: play = Array.from(get_sequence(talometer_options)).fill(true);

  let isPlaying = false;
  const talometer = new Talometer(talometer_options);

  const handleToggle = ({ detail: { data: id } }) => {
    play[id] = !play[id];
  };

  const handleClick = (e) => {
    switch (e.target.id) {
      case "playstop":
        talometer.update(sequence, play, nextNote, talometer_options);
        talometer.toggle();
        if (!isPlaying) {
          saveState({ sequence, play, talometer_options });
        }
        isPlaying = !isPlaying;
        index = -1;
        break;
    }
  };
</script>

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
      disabled={!talometer_options.tala.includes("#")}
      bind:value={talometer_options.jati}
    />
    <Dropdown
      name="nadai"
      options={nadai}
      label={"Nadai"}
      disabled={!talometer_options.tala.includes("#")}
      bind:value={talometer_options.nadai}
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
    <Lights
      bind:sequence
      bind:activeIndex={index}
      on:toggle={handleToggle}
      bind:play
    />
  </svelte:fragment>
</Panel>
<hr />
