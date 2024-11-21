<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="shortcut icon" href="../../Assets/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../Assets/css/home.css" media="all">
    <link rel="stylesheet" href="../../Assets/css/homeMQ.css">
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
                <container class="slides" style="display: block;">
                <div>
                        <button class="btnProjeto" id="btnProjetoRedes-sociais" data-src="https://profissional-marcelo.github.io/ProjetoRedesSociais/">
                            <img src="../../Assets/img/projetoRedes-sociais.png" alt="projeto Redes SOciais" class="projetos">
                            <p>Projeto Redes-Sociais</p>
                        </button>
                        <button class="btnProjeto" id="btnProjetoCordel" data-src="https://profissional-marcelo.github.io/Projeto-Cordel/">
                            <img src="../../Assets/img/projetoCordel.png" alt="projeto Cordel" class="projetos">
                            <p>Projeto Cordel</p>
                        </button>
                    </div>
                    <div>
                        <button class="btnProjeto" id="btnProjetoAndroid" data-src="https://profissional-marcelo.github.io/Projeto-Android/">
                            <div class="botao_projeto">
                                <img src="../../Assets/img/projetoAndroid.png" alt="projeto android" class="projetos">
                                <p>Projeto Android</p>
                            </div>
                        </button>
                        <button class="btnProjeto" id="btnProjetoPokedex" data-src="https://profissional-marcelo.github.io/Projeto-Pokedex/">
                            <img src="../../Assets/img/projetoPokedex.png" alt="projeto Pokedex" class="projetos">
                            <p>Projeto Pokédex</p>
                        </button>
                    </div>
                </container>
                <container class="slides" style="display: none;">
                <div>
                        <button class="btnProjeto" id="btnProjetoRedes-sociais" data-src="https://profissional-marcelo.github.io/ProjetoRedesSociais/">
                            <img src="../../Assets/img/projetoRedes-sociais.png" alt="projeto Redes SOciais" class="projetos">
                            <p>Projeto Redes-Sociais</p>
                        </button>
                        <button class="btnProjeto" id="btnProjetoCordel" data-src="https://profissional-marcelo.github.io/Projeto-Cordel/">
                            <img src="../../Assets/img/projetoCordel.png" alt="projeto Cordel" class="projetos">
                            <p>Projeto Cordel</p>
                        </button>
                    </div>
                    <div>
                        <button class="btnProjeto" id="btnProjetoAndroid" data-src="https://profissional-marcelo.github.io/Projeto-Android/">
                            <div class="botao_projeto">
                                <img src="../../Assets/img/projetoAndroid.png" alt="projeto android" class="projetos">
                                <p>Projeto Android</p>
                            </div>
                        </button>
                        <button class="btnProjeto" id="btnProjetoPokedex" data-src="https://profissional-marcelo.github.io/Projeto-Pokedex/">
                            <img src="../../Assets/img/projetoPokedex.png" alt="projeto Pokedex" class="projetos">
                            <p>Projeto Pokédex</p>
                        </button>
                    </div>
                </container>
                <container class="slides" style="display: none;">
                
                </container>
            </slider>
            <div class="bullets">
                <div class="bullet-single active-bullet"></div>
                <div class="bullet-single"></div>
                <div class="bullet-single"></div>
            </div>

        </section>

        <section class="iframe" style="display: none;">
            <iframe src="" frameborder="0" id="iframe"></iframe>
            <div id="botoes">
                <a href="" id="link_projeto" target="_blank"><button id="ir_para"><span class="material-symbols-outlined">arrow_outward</span></button></a>
                <button id="fechar_projeto"><span class="material-symbols-outlined">close</span></button>
                <a href="" type="application/pdf" rel="next" target="_blank"><button id="baixar_codigo"><span class="material-symbols-outlined">download</span></button></a>
                <div>
                    <label name="label" for="ir_para">Ir para</label>
                    <label name="fechar_projeto" for="fechar_projeto">Fechar</label>
                    <label for="baixar_codigo">Baixar código</label>
                </div>
            </div>
        </section>

        <section class="penguin">
            <button id="menu"><img src="../../Assets/img/penguin.png" alt="pinguim ícone"></button>
        </section>

        <section class="menu-desktop">
            <ul>
                <li><a href="#">Carreira</a></li>
                <li><a href="#">Certificados</a></li>
                <li><a href="#">Códigos rápidos</a></li>
                <li><a href="https://www.marcelorei.com.br">Portfólio</a></li>
            </ul>
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