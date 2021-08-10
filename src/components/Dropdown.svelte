<script>
    export let options;
    let selected;

    const handleChange = (e) => {
        selected = e.target.value;
        console.log(selected);
    };
</script>

<select value={selected} on:blur={handleChange}>
    {#each options as option}
        <option value={option.id}>
            {option.value}
        </option>
    {/each}
</select>

<style>
</style>
