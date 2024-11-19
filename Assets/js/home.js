//Variáveis
const botao_menu =  document.getElementById("menu");
const menu = document.querySelector("menu");
const header = document.querySelector("header");
const btn_lamp = document.getElementById("btn_lamp");
const section_lamp = document.getElementById("lamp");
const body = document.querySelector("body");
const pinguim = document.querySelector("section.penguin");
const projetos = document.querySelector("section.projetos");

//MENU Início --------------------

function abrirMenu() {
    menu.classList.remove("disable");
    menu.classList.add("active");
    header.classList.add("aplicarBlur");
    section_lamp.classList.add("aplicarBlur");
    projetos.classList.add("aplicarBlur");
    body.style.backgroundImage = "url(../../Assets/img/background_blush.png)";
}

function fecharMenu() {
    menu.classList.remove("active");
    header.classList.remove("aplicarBlur");
    section_lamp.classList.remove("aplicarBlur");
    projetos.classList.remove("aplicarBlur");
    menu.classList.add("disable");
    body.style.backgroundImage = "url(../../Assets/img/background.png)";
}


//Função para abrir e fechar o meno
botao_menu.addEventListener("click", () => {
    if (menu.classList.contains("disable")) {
        abrirMenu();
    } else {
        fecharMenu();
    }
});

//Função para verificar se houve um clique fora do menu e do botão
window.addEventListener('click', function(event) {
    // Verifica se o clique não ocorreu dentro do menu ou da seção do pinguim
    if (!event.target.closest('menu') && !event.target.closest('section.penguin')) {
        if (menu.classList.contains('active')) {
            fecharMenu();
        }
    }
});

//MENU Fim --------------------

// Lampada Início --------------------

btn_lamp.addEventListener("click", () => {
    const lamp_on = document.getElementById("lamp_on");
    const lamp_off = document.getElementById("lamp_off");
    const lamp_p = document.querySelector("section.lamp p");
    const container_lamp = document.querySelector("section.lamp container");

    if (lamp_on.classList.contains("disable")) {
        lamp_on.classList.remove("disable");
        lamp_on.classList.add("enable");
        lamp_off.classList.add("disable");
        lamp_p.classList.remove("disable");
        lamp_p.classList.remove("enable");
        container_lamp.classList.add("inverterLamp");
    } else {
        lamp_on.classList.remove("enable");
        lamp_on.classList.add("disable");
        lamp_off.classList.remove("disable");
        lamp_p.classList.remove("disable");
        lamp_p.classList.add("disable");
        container_lamp.classList.remove("inverterLamp")
        }

});

// Lampada fim --------------------