<script>
  import PlayRecord from "../components/PlayRecord.svelte";

  import { loadStates } from "../store";

  let records = [];
  loadStates().then((data) => {
    records = data;
  });
</script>

{#each records as record}
  <PlayRecord options={record.talometer_options} />
  <hr />
{/each}
