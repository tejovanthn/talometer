<script lang="ts">
  import Tala from "./Panels/Tala.svelte";
</script>

<nav>
  <h1>Talometer</h1>
</nav>
<main class="container mx-auto p-4">
  <Tala />
</main>

<!-- colors: https://coolors.co/ddf8e8-cdd5d1-b4a6ab-946e83-615055 -->
<svelte:head>
  <style>
    :root {
      --body-background: #ddf8e8;
      --primary: #946e83;
      --secondary: #b4a6ab;
      --primary-accent: #cdd5d1;
      --secondary-accent: #615055;
    }
  </style>
</svelte:head>

<style>
  :global(body) {
    background-color: var(--body-background);
  }
</style>
