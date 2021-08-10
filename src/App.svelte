<script lang="ts">
  import Talometer, { default_options } from "./talometer";
  import "smelte/src/tailwind.css";
  import { Button, Icon } from "smelte";
  import Controls from "./components/Controls.svelte";

  const talometer_options = default_options;

  let isPlaying = false;
  const talometer = new Talometer(talometer_options);

  const handleClick = (e) => {
    switch (e.target.id) {
      case "playstop":
        talometer.update(talometer_options);
        talometer.toggle();
        isPlaying = !isPlaying;
        break;
    }
  };
</script>

<main class="container mx-auto p-4">
  <Controls bindvalue={talometer_options} />
  <Button
    id="playstop"
    on:click={handleClick}
    icon={!isPlaying ? "play_arrow" : "stop"}
    classes="my-4 w-full text-center content-center"
    >{!isPlaying ? "Play" : "Stop"}
  </Button>
</main>

<head>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=swap"
    rel="stylesheet"
  />
</head>
