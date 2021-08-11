<script>
  export let label;
  export let value;
  export let type;
  export let name;
</script>

{#if label}
  <div class="form-group">
    <label for={name}>{label}</label>
    <input id={name} {value} {type} />
  </div>
{:else}
  <input id={name} {value} {type} />
{/if}

<style>
  .form-group {
    display: flex;
  }
  .form-group label {
    flex: 1;
    margin: 0.5rem 0;
  }
  .form-group input {
    flex: 3;
  }
  input {
    border-radius: 0;
    border: 1px solid var(--primary);
    background-color: var(--primary-accent);
    min-height: 2rem;
    width: 100%;
  }
  label {
    font-size: 0.8rem;
  }
</style>
