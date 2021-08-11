<script>
  export let activeIndex;
  export let sequence;
</script>

<div class="lights" style="--units:{sequence.length}">
  {#each sequence as note, i}
    <div
      class={`note ${note} ${
        i === activeIndex % sequence.length ? "active" : ""
      }`}
    />
  {/each}
</div>

<style>
  .note {
    width: calc(100% / var(--units));
    height: 2rem;
    background-color: var(--body-background);
    border: 1px solid var(--primary);
  }
  .active {
    background-color: var(--primary);
  }
  .lights {
    display: flex;
    margin-top: 1rem;
  }
  .up {
    margin-left: 0.5rem;
  }
  .up:first-child {
    margin-left: 0;
  }
</style>
