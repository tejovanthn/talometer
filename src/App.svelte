<script lang="ts">
  import Tala from "./Panels/Tala.svelte";
</script>

<nav>
  <h1>Talometer</h1>
</nav>
<main class="container mx-auto p-4">
  <Tala />
</main>
<footer>
  Made with ❤️ by <a href="https://tejovanthn.com/now">Tj</a>
</footer>

<!-- colors: https://coolors.co/ddf8e8-cdd5d1-b4a6ab-946e83-615055 -->
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
    rel="stylesheet"
  />
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
  footer {
    font-size: 0.5rem;
    text-align: center;
    bottom: 0;
    width: 100%;
    margin: 0.5rem -1rem;
    position: absolute;
  }
</style>
