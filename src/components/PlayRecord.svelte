<script>
  import { jati, pitch, tala, nadai } from "../constants";

  import { default_options } from "../sequencer";

  export let options = default_options;
</script>

<div>
  <p>
    {jati.find((v) => v.id === options.jati).value}
    {tala.find((v) => v.id === options.tala).value}
    in {pitch.find((v) => v.id === options.pitch).id}
  </p>
  <p>
    {nadai.find((v) => v.id === options.nadai).value} nadai at {options.bpm} BPM
  </p>
</div>

<style>
</style>
