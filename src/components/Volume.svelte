<script>
  import Button from "./Button.svelte";

  export let value;
  export let onchange = () => {};

  const handleClick = (e) => {
    switch (e.target.id) {
      case "mute":
        value = -999;
        break;
      case "range":
        value = e.target.value;
        break;
    }
    onchange(value);
  };
</script>

<label for="range">Volume</label>
<div class="grouped-input">
  <Button classes="secondary" id="mute" clickHandler={handleClick}>Mute</Button>
  <input
    type="range"
    min="-25"
    max="25"
    {value}
    class="slider"
    id="range"
    on:change={handleClick}
  />
</div>

<style>
  .grouped-input {
    display: flex;
    justify-content: stretch;
    width: 100%;
  }
  label {
    font-size: 0.8rem;
  }
  .slider {
    flex: 5;
    width: 100%;
  }
</style>
