<script>
  import Textfield from "./Textfield.svelte";
  import { Button } from "smelte";

  export let bindvalue;

  const handleClick = (e) => {
    switch (e.target.id) {
      case "/2":
        bindvalue /= 2;
        break;
      case "-5":
        bindvalue -= 5;
        break;
      case "+5":
        bindvalue += 5;
        break;
      case "*2":
        bindvalue *= 2;
        break;
    }
  };
</script>

<div class="flex">
  <Button id="/2" on:click={handleClick} classes={"flex-auto"}>/2</Button>
  <Button id="-5" on:click={handleClick} classes={"flex-auto"}>-5</Button>
  <Textfield
    id="bpm-input"
    type="number"
    {bindvalue}
    label={"BPM"}
    classes={"flex-auto"}
  />
  <Button id="+5" on:click={handleClick} classes={"flex-auto"}>+5</Button>
  <Button id="*2" on:click={handleClick} classes={"flex-auto"}>*2</Button>
</div>
