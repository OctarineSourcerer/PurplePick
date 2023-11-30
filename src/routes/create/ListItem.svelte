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

<style lang="scss">
	div {
		color: $theme-primary;
		font-family: $theme-item-font;
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
		font-family: $theme-item-font;
		color: $theme-can-activate;
		background: none;
		font-size: 2rem;
		/* Stops button nudging out the list slightly on focus */
		padding: 0px;
		transition: color 200ms;
		
		&:hover {
			color: $theme-deletes;
			// Should probably add an indicator for focus
			// If I use the same here, you can actually have your mouse off the thing and it still shows red. You can even have two at the same time
		}
	}
</style>

<div role="listitem"
	on:mouseover={showControls}
	on:focus={showControls}
	on:mouseleave={hideControls} class="flex-container">
	{name}
	{#if controls}
		<!-- Might be better to simply visible:false the element? Makes it easier to selenium etc, thats' for sure -->
		<button class="item bin" on:click={bin}>bin</button>
	{/if}
</div>