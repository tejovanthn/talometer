<script>
  import { TextField } from "smelte";

  export let label;
  export let value;
  export let type;
  export let classes;
</script>

<TextField
  bind:value
  {label}
  {type}
  classes={`mt-2 mb-6 relative text-gray-600 dark:text-gray-100 ${classes}`}
/>
