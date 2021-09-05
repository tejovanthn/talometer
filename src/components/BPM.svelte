<script>
  import Textfield from "./Textfield.svelte";
  import Button from "./Button.svelte";

  export let value;
  export let onchange = (value) => {};

  const handleClick = (e) => {
    switch (e.target.id) {
      case "/2":
        value /= 2;
        break;
      case "-5":
        value -= 5;
        break;
      case "+5":
        value += 5;
        break;
      case "*2":
        value *= 2;
        break;
    }
    onchange(value);
  };
</script>

<label for="bpm">BPM</label>
<div class="grouped-input">
  <Button classes="secondary" id="/2" clickHandler={handleClick}>/2</Button>
  <Button classes="secondary" id="-5" clickHandler={handleClick}>-5</Button>
  <Textfield name="bpm" type="number" {value} {onchange} />
  <Button classes="secondary" id="+5" clickHandler={handleClick}>+5</Button>
  <Button classes="secondary" id="*2" clickHandler={handleClick}>*2</Button>
</div>

<style>
  .grouped-input {
    display: flex;
    justify-content: stretch;
  }
  label {
    font-size: 0.8rem;
  }
</style>
