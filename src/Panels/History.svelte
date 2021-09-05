<script>
  import PlayRecord from "../components/PlayRecord.svelte";

  import { savedStates, loadStates, deleteState } from "../stores/persist";
  import { saveState } from "../stores/persist";
  import { talometer_options, talometer } from "../stores/talometer_state";
  import { isPlaying, indexOps } from "../stores/app_store";

  loadStates();
  $: playIndex = -1;

  const onPlay = (index) => {
    const options = $savedStates[index];
    const nextNote = indexOps.increment;

    talometer_options.set(options.talometer_options);

    isPlaying.update((wasPlaying) => {
      $talometer.update(
        options.sequence,
        options.play,
        nextNote,
        options.talometer_options
      );
      if (wasPlaying) {
        saveState({
          sequence: options.sequence,
          play: options.play,
          talometer_options: options.talometer_options,
        });
      }
      if (wasPlaying) {
        playIndex = -1;
        $talometer.stop();
        indexOps.reset();
      } else {
        playIndex = index;
        $talometer.play();
      }
      // talometer.toggle();
      return !wasPlaying;
    });
  };
  const onDelete = (record) => deleteState(record);
</script>

{#each $savedStates as record, index}
  <PlayRecord
    options={record.talometer_options}
    onPlay={() => onPlay(index)}
    onDelete={() => onDelete(record)}
    isPlaying={index === playIndex}
    lastPlayed={record.timestamp}
  />
  <hr />
{/each}
