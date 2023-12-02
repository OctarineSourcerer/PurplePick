<script>
    export let text = "Test";
</script>

<style lang="scss">
    .go-button {
        background-color: forestgreen;
        padding: 5px 10px 5px 10px;
        transition: filter 200ms;
    }
    
    .go-button:hover {
        filter: brightness(115%);
    }
</style>

<button class="go-button">{text}</button>