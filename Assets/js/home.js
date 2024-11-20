document.addEventListener("DOMContentLoaded", function() {

//Variáveis
const botao_menu =  document.getElementById("menu");
const menu = document.querySelector("menu");
const header = document.querySelector("header");
const btn_lamp = document.getElementById("btn_lamp");
const section_lamp = document.getElementById("lamp");
const body = document.querySelector("body");
const pinguim = document.querySelector("section.penguin");
const projetos = document.querySelector("section.projetos");

const section_iframe = document.querySelector("section.iframe");
const iframe = document.getElementById("iframe");
const botoes = document.querySelectorAll("button.btnProjeto");
const fechar_projeto = document.getElementById("fechar_projeto");
let retorno = false;
//Funções recursivas

function verificaDisplay(){
    if (section_iframe.style.display == "block") {
        body.style.overflow = "hidden";
        aplicaBlur();
    }
}

function mudaRetorno() {
    if (section_iframe.style.display == "block"){
        retorno = true;
    } 
    else if (section_iframe.style.display == "none" && retorno == true) {
        retorno = false;
    }
        
}


setInterval(verificaDisplay, 100);

setInterval(mudaRetorno, 200);
//MENU Início --------------------

function abrirMenu() {
    menu.classList.remove("disable");
    menu.classList.add("active");
    aplicaBlur();
    body.style.backgroundImage = "url(../../Assets/img/background_blush.png)";
    body.style.overflow = "hidden";
}

function aplicaBlur(){
    header.classList.add("aplicarBlur");
    section_lamp.classList.add("aplicarBlur");
    projetos.classList.add("aplicarBlur");
}

function tiraBlur(){
    header.classList.remove("aplicarBlur");
    section_lamp.classList.remove("aplicarBlur");
    projetos.classList.remove("aplicarBlur");
}


function fecharMenu() {
    menu.classList.remove("active");
    tiraBlur();
    menu.classList.add("disable");
    body.style.backgroundImage = "url(../../Assets/img/background.png)";
    body.style.overflow = "inherit";
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

    if (!event.target.closest('iframe') && !event.target.closest('iframe > div')){
        if (retorno == true) {
            
            fechar_projeto.click();
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

//Projetos Início --------------------

botoes.forEach(botao =>{
    botao.addEventListener("click", () => {
         if (section_iframe.style.display == "none") {
          section_iframe.style.display = "block";
          iframe.src = botao.getAttribute("data-src");
          body.style.overflow = "hidden";
          aplicaBlur();
            fechar_projeto.addEventListener("click", () => {
                section_iframe.style.display = "none";
                body.style.overflow = "inherit";
                tiraBlur();
                
            })
        }
    })
})




function fecharProjetos() {


}


//Projetos fim --------------------

});

