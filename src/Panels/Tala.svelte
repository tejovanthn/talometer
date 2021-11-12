<script>
  import { get_sequence } from "../sequencer";
  import { tala, jati, nadai, pitch } from "../constants";
  import Dropdown from "../components/Dropdown.svelte";
  import Bpm from "../components/BPM.svelte";
  import Panel from "../components/Panel.svelte";
  import Button from "../components/Button.svelte";
  import Lights from "../components/Lights.svelte";
  import { isPlaying, index, indexOps } from "../stores/app_store";
  import { saveState } from "../stores/persist";
  import { talometer_options, talometer } from "../stores/talometer_state";
  import Volume from "../components/Volume.svelte";

  const nextNote = indexOps.increment;

  $: sequence = get_sequence($talometer_options);
  $: play = Array.from(get_sequence($talometer_options)).fill(true);

  const handleToggle = ({ detail: { data: id } }) => {
    play[id] = !play[id];
  };

  talometer_options.subscribe((options) => {
    $talometer.update(sequence, play, nextNote, options);
    if ($isPlaying) {
      $talometer.play();
    }
  });

  const handleClick = (e) => {
    switch (e.target.id) {
      case "playstop":
        isPlaying.update((wasPlaying) => {
          $talometer.update(sequence, play, nextNote, $talometer_options);
          if (wasPlaying) {
            saveState({
              sequence,
              play,
              talometer_options: $talometer_options,
            });
          }
          if (wasPlaying) {
            $talometer.stop();
            indexOps.reset();
          } else {
            $talometer.play();
          }
          // talometer.toggle();
          return !wasPlaying;
        });
        break;
    }
  };
</script>

<Panel>
  <svelte:fragment slot="title">
    <h3>Tala</h3>
  </svelte:fragment>
  <svelte:fragment slot="action">
    <Button classes="full primary" id="playstop" clickHandler={handleClick}
      >{!$isPlaying ? "Play" : "Stop"}</Button
    >
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <Dropdown
      name="tala"
      options={tala}
      label={"Tala"}
      disabled={$isPlaying}
      bind:value={$talometer_options.tala}
      makeName={(n) => `${n.value} (${n.id})`.replaceAll("#", "")}
    />
    <Dropdown
      name="jati"
      options={jati}
      label={"Jati"}
      disabled={!$talometer_options.tala.includes("#") || $isPlaying}
      bind:value={$talometer_options.jati}
    />
    <Dropdown
      name="nadai"
      options={nadai}
      label={"Nadai"}
      disabled={!$talometer_options.tala.includes("#")}
      bind:value={$talometer_options.nadai}
    />
    <Dropdown
      name="pitch"
      options={pitch}
      label={"Pitch"}
      bind:value={$talometer_options.pitch}
    />
  </svelte:fragment>
  <svelte:fragment slot="control-bar">
    <Bpm value={$talometer_options.bpm} onchange={talometer_options.setBPM} />
    <Lights
      bind:sequence
      bind:activeIndex={$index}
      on:toggle={handleToggle}
      bind:play
    />
    <Volume
      value={$talometer_options.talaVolume}
      onchange={talometer_options.setTalaVolume}
    />
  </svelte:fragment>
</Panel>
<hr />
<Panel>
  <svelte:fragment slot="title">
    <h3>Shruthi</h3>
  </svelte:fragment>
  <svelte:fragment slot="control-bar">
    <Volume
      value={$talometer_options.tanpuraVolume}
      onchange={talometer_options.setTanpuraVolume}
    />
  </svelte:fragment>
</Panel>
