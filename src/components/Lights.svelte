<script>
  import { createEventDispatcher } from "svelte";

  export let activeIndex;
  export let sequence;
  export let play;

  const dispatch = createEventDispatcher();

  const handleClick = (id) => {
    dispatch("toggle", { data: id });
  };
</script>

<div class="lights" style="--units:{sequence.length}">
  {#each sequence as note, i}
    <button
      class={`note ${note} ${
        i === activeIndex % sequence.length ? "active" : ""
      } ${play[i] ? "play" : "mute"}`}
      on:click={() => handleClick(i)}>{i + 1}</button
    >
  {/each}
</div>

<style>
  .note {
    width: calc(100% / var(--units));
    height: 2rem;
    background-color: var(--body-background);
    border: 1px solid var(--primary);
  }
  .note.active {
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
  .mute {
    background-color: var(--primary-accent);
  }
</style>
