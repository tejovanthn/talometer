<script>
    import { Select } from "smelte";

    export let label;
    export let options;
    export let value;

    const remap = (arr) =>
        arr.map((el) => ({ value: el.id, text: `${el.value} (${el.id})` }));
</script>

<Select bind:value {label} items={remap(options)} />
