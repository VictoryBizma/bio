<script lang="ts">
    import { textCopyState } from "./store";
    import copy from "copy-to-clipboard";
    function copyText(input: string){
        copy(input);
        $textCopyState.text = input;
        clearTimeout($textCopyState.timeOut);
            $textCopyState.timeOut = setTimeout(()=>{
                $textCopyState.text = "";
        }, 3000);
    }
</script>
<div class="presentation">
    <h1>Victory Bizma</h1>
    <h2>Programador Web & PixelArtista</h2>
    <p>
        Hola, me encanta hablar mucho (Bastante), en realidad soy introvertido, 
        no más que no soy muy fan de estar con personas en la vida real.
        La única red social en donde estoy súper activo es Discord, mi usuario es
        <button 
            class="button-copy"
            title="Copiar el texto"
            on:click={()=>copyText("victorybizma")}
        >victorybizma</button>. Soy más de hablar por chat de Voz, quiero conocer nuevas personas y
        estoy en el ordenador todo el día, así que lo más probable es que te responda. <br> Un gusto ✨
    </p>
</div>
<style>
    .presentation{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 512px;
        padding: 35px;
        background-image: url(/weapon.png);
        background-position: center;
        border-radius: 10px;
        border: 1px var(--purple) solid;

        grid-column: 1/3;
    }
    .presentation h1{
        backdrop-filter: blur(10px);
        padding: 5px;
    }
    .presentation h2{
        backdrop-filter: blur(10px);
        padding: 3px;
        background-image: linear-gradient(to left, var(--magenta), var(--cyan));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .presentation p{
        background-color: rgba(14, 14, 14, 1);
        padding: 30px;
        border-radius: 3px;
        /* box-shadow: 0 2px 1px var(--purple); */
        backdrop-filter: blur(10px);
        line-break: normal;
    }
    .button-copy{
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
    }
    @media only screen and (max-device-width: 768px){
        .presentation{
            width: 350px;
            grid-column: 1/2;
            padding: 10px;
        }
        .presentation h2{
            text-align: center;
        }
    }
</style>