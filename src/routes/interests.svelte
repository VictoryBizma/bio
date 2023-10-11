<h3 class="title">Gustos</h3>
<section class="interests">
    <div class="list">
        <div class="main-icon">🎶</div>
        <div class="item">
            <img src="voltaire.jpg" alt="Aurelio Voltaire" />
            <a href="https://www.youtube.com/watch?v=MsD0jXSk0l4"
                >Aurelio Voltaire Sacrifice</a
            >
        </div>
        <div class="item">
            <img src="mob.jpg" alt="Canal Mob Music" />
            <a href="https://www.youtube.com/watch?v=Ip7H4dXrfMM">99.9</a>
        </div>
        <div class="item">
            <img src="celldweller.jpg" alt="Celldweller" />
            <a href="https://www.youtube.com/watch?v=v-vURqOPcng"
                >Own Little World (Drop Remix)</a
            >
        </div>
        <div class="item">
            <img src="raiden.png" alt="Una foto de Raiden" />
            <a href="https://www.youtube.com/watch?v=KTorzZ289R8"
                >The Only Thing I Know For Real</a
            >
        </div>
        <div class="item">
            <img src="wea.jpg" alt="La Wea Astral" />
            <a href="https://www.youtube.com/watch?v=_FTlFSWhjcw"
                >Alastor's Game [Cover]</a
            >
        </div>
    </div>
    <div class="list games">
        <div class="main-icon">🎮</div>
        <div class="item">
            <p>Silent Hill 2</p>
            <div
                class="game-photo"
                style="background-image: url(silent.png);"
            />
        </div>
        <div class="item">
            <p>Ultrakill</p>
            <div
                class="game-photo"
                style="background-image: url(ultrakill.jpg);"
            />
        </div>
        <div class="item">
            <p>MGR Revenge</p>
            <div
                class="game-photo"
                style="background-image: url(metal.jpg);"
            />
        </div>
        <div class="item">
            <p>Katana Zero</p>
            <div
                class="game-photo"
                style="background-image: url(katana.jpg);"
            />
        </div>
        <div class="item">
            <p>C&C Tiberium Wars 3</p>
            <div
                class="game-photo"
                style="background-image: url(command.jpg);"
            />
        </div>
    </div>
    <div class="list">
        <div class="main-icon">💃</div>
        <div class="item">
            <img src="charlie.png" alt="Charlie Magne" />
            <p>Charlie (Hazbin Hotel)</p>
        </div>
        <div class="item">
            <img src="millie.png" alt="Millie (Helluva Boss)" />
            <p>Millie (Helluva Boss)</p>
        </div>
        <div class="item">
            <img src="missi.png" alt="Missi (Daria Cohen)" />
            <p>Missi (Daria Cohen)</p>
        </div>
        <div class="item">
            <img src="boros.png" alt="Boros (One Punch Man)" />
            <p>Boros (One Punch Man)</p>
        </div>
        <div class="item">
            <img src="sploot_avt.png" alt="Sploot (Unknownspy)" />
            <p>Sploot (Unknownspy)</p>
        </div>
    </div>
    <div class="list set-subjects">
        <p class="subject">Programación</p>
        <p class="subject">Arte</p>
        <p class="subject">Imaginación</p>
        <p class="subject">Emociones</p>
        <p class="subject">LoveCraft</p>
        <p class="subject">Dubstep</p>
        <p class="subject">MúsicaElectrónica</p>
        <p class="subject">ElectroSwing</p>
        <p class="subject">TerrorPsicológico</p>
        <p class="subject">DarkCabaret</p>
        <p class="subject">Gótico</p>
        <p class="subject">Exageración</p>
        <p class="subject">Cyberpunk</p>
        <p class="subject">Violeta</p>
        <p class="subject">Peleas Animadas</p>
        <p class="subject">Historias</p>
    </div>
</section>

<style>
    .title{
        grid-column: 3/11;
        color: var(--magenta);

        margin: 0;
        padding: 10px 50px;
        user-select: none;
        border-bottom: 1px var(--magenta) solid;
    }
    p {
        margin: 0;
    }
    .interests {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 1fr;
        gap: 15px;
        place-items: stretch;
        width: fit-content;
        grid-column: 3/11;
    }
    .interests .list {
        display: grid;
        grid-auto-rows: 1fr;
        position: relative;
        overflow: hidden;
        background-color: var(--purple);
        padding: 15px 10px;
        gap: 3px;
        border-radius: 4px;
    }

    .interests .list .main-icon{
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--black);
        width: 50px;
        height: 50px;
        border-radius: 50% 0 50% 50%;
        border: 1px var(--purple) solid;
        display: grid;
        place-content: center;
        z-index: 200;
        box-sizing: content-box;
    }
    .interests .list.games .item {
        grid-template-columns: 0.5fr 0.5fr;
    }
    .interests .list .item {
        display: grid;
        grid-template-columns: 0.1fr 0.9fr;
        place-items: center;
        padding: 10px;
        border-radius: 8px;
        gap: 5px;
        transition: all 100ms;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: var(--black);
        position: relative;
        text-align: center;
    }
    .interests .list .item .game-photo {
        place-self: stretch;
        background-size: cover;
        background-position: center;
        border-radius: 5px;
        filter: grayscale();
    }
    .interests .list .item:hover {
        transform: translateY(-1px);
        transition: all 100ms;
        box-shadow: 0 0 10px var(--black);
        z-index: 100;
    }
    .interests .list .item:hover .game-photo {
        filter: none;
    }
    .interests .list.set-subjects {
        display: flex;
        flex-flow: row wrap;
        background-color: var(--purple);
        gap: 2px;
    }
    .interests .list.set-subjects .subject {
        background-color: var(--black);
        display: grid;
        place-items: center;
        box-sizing: content-box;
        flex-grow: 1;
        padding: 5px 15px;
        border-radius: 5px;
        border: 1px var(--purple) solid;
        transition: 50ms all;
    }
    .interests .list.set-subjects .subject:hover {
        /* -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to left, var(--cyan), var(--magenta));
        color: transparent;
        flex-grow: 3; */
        /* font-weight: bold; */
        transform: scale(1.05);
        transition: 100ms all;
    }
    .interests .list .item .mega-text p {
        text-align: center;
        border-radius: 3px;
    }
    .interests .list .item img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        /* border: 3px var(--purple) solid; */
        box-sizing: content-box;
        user-select: none;
        pointer-events: none;
    }
    .interests .list .item a {
        color: var(--white);
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        text-decoration: none;
    }
    .interests .list .item a:hover{
        text-decoration: underline;
    }
    @media only screen and (max-device-width: 768px) {
        .interests {
            grid-column: 1/2;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
        }
        .title{
            grid-column: 1/2;
        }
    }
</style>
