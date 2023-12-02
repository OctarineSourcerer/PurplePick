<script>
	import ListItem from '../../components/ListItem.svelte';
    import GoButton from '../../components/GoButton.svelte';
    export let data;
</script>

<h1>{data.title}</h1>

{#each data.listItems as name}
    <ListItem name={name} />
{/each}

<GoButton text="Go!" />