<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	// Each item should be given a unique ID so this component can communicate to its mother component
	export let itemId = 123;
    export let name = "Default name";
	let controls = false;

	function hideControls(event:Event) {
		controls = false;
	}
	function showControls(event:Event) {
		controls = true;
	}
	function bin(event:Event) {
		console.log("death of " + name);
		dispatch('delete', {
			"itemID": itemId
		});
	}
</script>

<style>
	div {
		color: goldenrod;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 2rem;
	}
	.flex-container {
		display:flex;
		align-items: center;
	}
	.item {
		margin-left: 1rem;
	}
	.bin {
		font-family: 'Bebas Neue', sans-serif;
		color: whitesmoke;
		background: none;
		font-size: 2rem;
		/* Stops button nudging out the list slightly on focus */
		padding: 0px;
		transition: color 200ms;
	}
	.bin:hover, .bin:focus {
		color: crimson;
	}
</style>

<div role="listitem"
	on:mouseover={showControls}
	on:focus={showControls}
	on:mouseleave={hideControls} class="flex-container">
	{name}
	{#if controls}
		<!-- Button is likely to be more applicable here, also for accessibility purposes -->
		<button class="item bin" on:click={bin}>bin</button>
	{/if}
</div>