<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Tala from "./Panels/Tala.svelte";
  import History from "./Panels/History.svelte";
  import About from "./Panels/About.svelte";
  import ActiveLink from "./components/ActiveLink.svelte";
  import Settings from "./Panels/Settings.svelte";
</script>

<Router>
  <nav>
    <h1>Tala Pettige</h1>
    <ActiveLink to="/">Play</ActiveLink>
    <ActiveLink to="history">History</ActiveLink>
    <ActiveLink to="about">About</ActiveLink>
    <ActiveLink to="settings" className="right"
      ><img
        src="./images/settings.svg"
        alt="settings"
        height="20px"
        width="20px"
      /></ActiveLink
    >
  </nav>
  <hr />

  <main class="container mx-auto p-4">
    <Route path="/" primary={false}>
      <Tala />
    </Route>
    <Route path="history" primary={false}>
      <History />
    </Route>
    <Route path="about" primary={false}>
      <About />
    </Route>
    <Route path="settings" primary={false}>
      <Settings />
    </Route>
  </main>
  <footer>
    Made with ❤️ by <a href="https://tejovanthn.com/now">Tj</a>
  </footer>
</Router>

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
    position: sticky;
    background: var(--body-background);
  }
  main {
    min-height: 90vh;
  }
</style>
