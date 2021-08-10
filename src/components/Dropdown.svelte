<script>
    import { Select } from "smelte";

    export let label;
    export let options;
    export let bindvalue;

    const remap = (arr) =>
        arr.map((el) => ({ value: el.id, text: `${el.value} (${el.id})` }));
</script>

<Select bind:value={bindvalue} {label} items={remap(options)} />
