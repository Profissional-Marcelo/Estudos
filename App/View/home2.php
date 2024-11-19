<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="shortcut icon" href="../../Assets/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../Assets/css/home2.css" media="all">
    <title>Estudos</title>
</head>

<body>
    <main>
        <header>
            <h1 class="nome">Marcelo Henrique Cornelis Rei</h1>
        </header>

        <section class="lamp" id="lamp">
            <container>
                <button id="btn_lamp"><img src="../../Assets/img/lampOff.png" alt="Lâmpada desligada" class="lamp" id="lamp_off">
                    <img src="../../Assets/img/lampOn.png" alt="Lâmpada ligada" class="lamp disable" id="lamp_on">
                </button>
                <p class="disable">"Não existe formula mágica para aprender, existe estudo, persistência e dedicação."</p>
            </container>
        </section>
        <section class="projetos">
            <img src="../../Assets/img/titlePage.png" alt="">
            <slider>
                <container class="slides">
                <button class="btnProjeto" id="btnProjetoRedes-sociais">
                        <img src="../../Assets/img/projetoRedes-sociais.png" alt="projeto Redes SOciais" class="projetos">
                        <p>Projeto Redes-Sociais</p>
                    </button>
                    <button class="btnProjeto" id="btnProjetoCordel">
                        <img src="../../Assets/img/projetoCordel.png" alt="projeto Cordel" class="projetos">
                        <p>Projeto Cordel</p>
                    </button>
                    <button class="btnProjeto" id="btnProjetoAndroid">
                        <div class="botao_projeto">
                            <img src="../../Assets/img/projetoAndroid.png" alt="projeto android" class="projetos">
                            <p>Projeto Android</p>
                        </div>
                    </button>
                    <button class="btnProjeto" id="btnProjetoPokedex">
                        <img src="../../Assets/img/projetoPokedex.png" alt="projeto Pokedex" class="projetos">
                        <p>Projeto Pokédex</p>
                    </button>
                </container>
            </slider>
        </section>

        <section class="penguin">
            <button id="menu"><img src="../../Assets/img/penguin.png" alt="pinguim ícone"></button>
        </section>

        <menu class="disable">
            <ul>
                <li><a href="#">Carreira</a></li>
                <li><a href="#">Certificados</a></li>
                <li><a href="#">Códigos rápidos</a></li>
                <li><a href="https://www.marcelorei.com.br">Portfólio</a></li>
            </ul>
        </menu>
        <script src="../../Assets/js/home.js"></script>
</body>

</html>