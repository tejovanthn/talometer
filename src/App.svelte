<script lang="ts">
  import Talometer from "./talometer";
  const talometer = new Talometer()

  const handleClick = (e) => {
    switch (e.target.id) {
      case "pauseplay":
        talometer.toggle()
        break;
      default:
        break;
    }
  };
</script>

<main>
  <button id="pauseplay" on:click={handleClick}>Start</button>
</main>
