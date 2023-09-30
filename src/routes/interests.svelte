<section class="interests">
    <h3 class="title">Gustos</h3>
    <div class="list">
        <h4>Músicas & Vídeos</h4>
        <div class="item">
            <img src="voltaire.jpg" alt="Aurelio Voltaire">
            <a href="https://www.youtube.com/watch?v=MsD0jXSk0l4">Aurelio Voltaire Sacrifice</a>
        </div>
        <div class="item">
            <img src="mob.jpg" alt="Canal Mob Music">
            <a href="https://www.youtube.com/watch?v=Ip7H4dXrfMM">99.9</a>
        </div>
        <div class="item">
            <img src="wea.jpg" alt="La Wea Astral">
            <a href="https://www.youtube.com/watch?v=_FTlFSWhjcw">Alastor's Game [Cover]</a>
        </div>
        <div class="item">
            <img src="raiden.png" alt="Una foto de Raiden">
            <a href="https://www.youtube.com/watch?v=KTorzZ289R8">The Only Thing I Know For Real</a>
        </div>
    </div>
    <div class="list">
        <h4>Juegos</h4>
        <div class="item" style="background-image: url(ultrakill.jpg);">
            <!-- <div class="mega-text">
                <p>Ultrakill</p>
            </div> -->
        </div>
        <div class="item" style="background-image: url(katana.jpg);">
            <!-- <div class="mega-text">
                <p>Katana Zero</p>
            </div> -->
        </div>
        <div class="item" style="background-image: url(metal.jpg);">
            <!-- <div class="mega-text">
                <p>Metal Gear Rising: Revenge</p>
            </div> -->
        </div>
        <div class="item" style="background-image: url(command.jpg);">
            <!-- <div class="mega-text">
                <p>Command & Conquers: <br> Tiberium Wars 3</p>
            </div> -->
        </div>
    </div>
    <div class="list">
        <h4>Personajes</h4>
        <div class="item">
            <img src="charlie.png" alt="Charlie Magne">
            <p>Charlie (Hazbin Hotel)</p>
        </div>
        <div class="item">
            <img src="millie.png" alt="Millie (Helluva Boss)">
            <p>Millie (Helluva Boss)</p>
        </div>
        <div class="item">
            <img src="missi.png" alt="Missi (Daria Cohen)">
            <p>Missi (Daria Cohen)</p>
        </div>
        <div class="item">
            <img src="boros.png" alt="Boros (One Punch Man)">
            <p>Boros (One Punch Man)</p>
        </div>
    </div>
    <div class="list">
        <h4>Temas</h4>
        <div class="item">
            <div class="mega-text">
                <p>Programación</p>
            </div>
        </div>
        <div class="item">
            <div class="mega-text">
                <p>Arte</p>
            </div>
        </div>
        <div class="item">
            <div class="mega-text">
                <p>Imaginación</p>
            </div>
        </div>
        <div class="item">
            <div class="mega-text">
                <p>Emociones</p>
            </div>
        </div>
    </div>
</section>
<style>
    p {
        margin: 0;
    }
    .interests{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 0.1fr 1fr 1fr;
        gap: 15px;
        justify-items: center;
        align-items: center;

        grid-column: 1/3;
    }
    .interests .title{
        grid-column: 1/3;
        pointer-events: none;
        user-select: none;

    }
    .interests .list{
        display: grid;
        grid-template-rows: auto repeat(4, 1fr);

        justify-items: center;
        align-items: center;
        gap: 10px;
        padding: 15px;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background-color: var(--purple);
    }
    .interests .list h4{
        border-radius: 2px;
        pointer-events: none;
        user-select: none;
        margin: 0;
        padding: 10px;
        /* color: var(--cyan); */
        /* background-color: var(--cyan);
        padding: 10px;
        padding-left: 30px;
        padding-right: 30px; */
    }
    .interests .list .item {
        display: grid;
        grid-template-columns: 0.1fr 1fr;
        justify-items: center;
        align-items: center;
        padding: 22px;
        /* padding-top: 10px;
        padding-bottom: 10px; */
        border-radius: 6px;
        width: 100%;
        height: 100%;
        gap: 10px;
        transition: all 100ms;
        background-blend-mode: luminosity;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: var(--black);
        /* position: relative; */
        border: 1px var(--black) solid;
    }
    .interests .list .item:hover{
        transform: translateY(-2px);
        transition: all 100ms;
        box-shadow: 0 0 10px var(--black);
        z-index: 100;
        background-blend-mode: normal;
        /* height: 300px; */
    }
    .interests .list .item .mega-text{
        grid-column: 1/3;
        /* background-image: linear-gradient(to right, var(--cyan), var(--magenta)); */
        border-radius: 5px;
        /* backdrop-filter: blur(20px); */
        background-color: var(--black);
        width: 22fr;
        height: 100%;
        /* position: absolute; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* padding: 10px; */
    }
    .interests .list .item .mega-text p{
        /* font-weight: bold; */
        /* background-color: var(--black); */
        /* color: var(--black); */
        /* background-clip: text; */
        /* -webkit-background-clip: text; */
        /* backdrop-filter: blur(20px); */
        text-align: center;
        /* padding: 10px; */
        /* padding-left: 30px;
        padding-right: 30px; */
        border-radius: 3px;
        /* display: none; */
    }
    .interests .list .item img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 3px var(--purple) solid;
        box-sizing: content-box;
        user-select: none;
        pointer-events: none;
    }
    .interests .list .item a{
        color: var(--white);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-device-width: 768px){
        .interests h3{
            grid-column: 1/2;
        }
        .interests{
            grid-column: 1/2;
            grid-template-columns: 1fr;
            grid-template-rows: auto repeat(4, 1fr);
        }
    }
</style>