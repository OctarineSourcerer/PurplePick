<script>
	import ListItem from '../../components/ListItem.svelte';
    export let data;
</script>

<h1>{data.title}</h1>

{#each data.listItems as name}
    <ListItem name={name} />
{/each}

<button>Go!</button>