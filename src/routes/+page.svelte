<script lang="ts">

    import { scale } from "svelte/transition";
    import Interests from "./interests.svelte";
    import PixelArts from "./pixelArts.svelte";
    import Footer from "./footer.svelte";
    import { textCopyState } from "./store";
    import Presentation from "./presentation.svelte";
    import Info from "./info.svelte";

</script>
<main>
    {#if $textCopyState.text}
        <div in:scale out:scale class="popover-copyText">
            <p>Has copiado "<strong>{$textCopyState.text}</strong>" ✨</p>
        </div>
    {/if}
    <Presentation />
    <Interests />
    <Info />
    <PixelArts />
    <Footer />
</main>
<style>
    main{
        font-family: sans-serif;
        width: 100%;
        background-color: var(--black);
        color: var(--white);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        padding: 30px;
        gap: 30px;
    }

    .popover-copyText{
        position: fixed;
        top: 10px;
        right: 10px;
        background-color: var(--black);
        color: var(--white);
        padding-left: 20px;
        padding-right: 20px;
        border: 1px var(--purple) solid;
        pointer-events: none;
        border-radius: 3px;
        z-index: 200;
    }
    .popover-copyText strong{
        color: var(--magenta);
    }
    @media only screen and (max-device-width: 768px){
        main{
            grid-template-columns: 1fr;
            padding: 10px;
        }
    }
</style>