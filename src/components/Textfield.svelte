<script>
  import { TextField } from "smelte";

  export let label;
  export let bindvalue;
  export let type;
  export let classes;
</script>

<TextField
  bind:value={bindvalue}
  {label}
  {type}
  classes={`mt-2 mb-6 relative text-gray-600 dark:text-gray-100 ${classes}`}
/>
