<section class="pixelArts">
    <h4>Algunos PixelArts</h4>
    <img src="pixelArts/eyes.png" alt="Glich de ojos">
    <img src="pixelArts/eyes2.png" alt="Un alien sonriendo">
    <img src="pixelArts/eyes3.png" alt="Un ser extraño">
    <img src="pixelArts/ojo1.png" alt="Alien pulpo de un ojo">
    <img src="pixelArts/ojo2.png" alt="Un ojo amarillo">
    <img src="pixelArts/chica.png" alt="Una niña">
</section>
<style>
    .pixelArts{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: 10px;
        border: 1px var(--purple) solid;
        padding: 20px;
        border-radius: 10px;
        justify-items: center;
        align-items: center;
        grid-column: 7/11;
    }
    h4{
        grid-column: 1/4;
    }
    img{
        border-radius: 5px;
        width: calc(64px*2);
        height: calc(64px*2);
        image-rendering: pixelated;
        transition: all 100ms;
    }
    img:hover{
        transform: translateY(-2px);
        transition: all 100ms;
    }
    @media only screen and (max-device-width: 768px){
        .pixelArts{
            grid-column: 1/2;
        }
        img{
            width: 64px;
            height: 64px;
        }
    }
</style>