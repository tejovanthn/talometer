<script>
    export let options;
    export let onchange;
    let selected;

    const handleChange = (e) => {
        selected = e.target.value;
        onchange(selected);
    };
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select value={selected} on:change={handleChange}>
    {#each options as option}
        <option value={option.id}>
            {`${option.value} (${option.id})`}
        </option>
    {/each}
</select>

<style>
</style>
