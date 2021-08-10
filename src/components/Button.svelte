<script>
  export let clickHandler;
  export let classes;
  export let id;
</script>

<button {id} class={classes} on:click={clickHandler}><slot /> </button>

<style>
  button {
    background: none;
    margin: 0;
    padding: 0.5rem;
    border: 1px solid var(--primary);
    border-radius: 0;
  }
  .full {
    height: 100%;
    width: 100%;
  }
  .primary {
    background-color: var(--primary);
  }
  .secondary {
    background-color: var(--secondary);
  }
</style>
