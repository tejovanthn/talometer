<script>
  export let label;
  export let options;
  export let value;
  export let name;
  export let disabled = false;
  export let makeName = (n) => `${n.value} (${n.id})`;
</script>

<!-- svelte-ignore a11y-no-onchange -->
<div class="form-group">
  <label for={name}>{label}</label>
  <select id={name} bind:value {disabled}>
    {#each options as option}
      <option value={option.id}>
        {makeName(option)}
      </option>
    {/each}
  </select>
</div>

<style>
  .form-group {
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
  }
  .form-group label {
    flex: 1;
  }
  .form-group select {
    flex: 3;
    border-radius: 0;
    border: 1px solid var(--primary);
  }
  label {
    font-size: 0.8rem;
  }
  select {
    background-color: var(--primary-accent);
    min-height: 2rem;
  }
</style>
