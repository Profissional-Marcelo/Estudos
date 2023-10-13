//menu
$("#btnMenu").click(()=>{
    $("#listarMenu").toggle();
})

//lampadas

$("#btnLampOff").click(()=>{
    $("#btnLampOff").hide();
    $("#ligarDesligar").toggle();
});

$("#btnLampOn").click(()=>{
    $("#ligarDesligar").hide();
    $("#btnLampOff").toggle();
});

//Abrir projeto Android

$("#btnProjetoAndroid").click(()=>{
    $("#header").toggleClass("blur");
    $("#btnLampOff").toggleClass("blur");
    $("#titulo").toggleClass("blur");
    $("#btnProjetoAndroid").toggleClass("blur");
    $("#btnProjetoCordel").toggleClass("blur");
    $("#btnProjetoPokedex").toggleClass("blur");
    $("#menuAndroid").toggle();
});

//Fechar Projeto Android
$("#btnVoltarAndroid").click(()=>{
    $("#menuAndroid").hide();
    $("#header").removeClass("blur");
    $("#btnLampOff").removeClass("blur");
    $("#titulo").removeClass("blur");
    $("#btnProjetoAndroid").removeClass("blur");
    $("#btnProjetoCordel").removeClass("blur");
    $("#btnProjetoPokedex").removeClass("blur");
})


//Abrir projeto Cordel
$("#btnProjetoCordel").click(()=>{
    $("#header").toggleClass("blur");
    $("#btnLampOff").toggleClass("blur");
    $("#titulo").toggleClass("blur");
    $("#btnProjetoAndroid").toggleClass("blur");
    $("#btnProjetoCordel").toggleClass("blur");
    $("#btnProjetoPokedex").toggleClass("blur");
    $("#menuCordel").toggle();
});

//Fechar projeto Cordel
$("#btnVoltarCordel").click(()=>{
    $("#menuCordel").hide();
    $("#header").removeClass("blur");
    $("#btnLampOff").removeClass("blur");
    $("#titulo").removeClass("blur");
    $("#btnProjetoAndroid").removeClass("blur");
    $("#btnProjetoCordel").removeClass("blur");
    $("#btnProjetoPokedex").removeClass("blur");
});

//Abrir projeto Pokedex
$("#btnProjetoPokedex").click(()=>{
    $("#header").toggleClass("blur");
    $("#btnLampOff").toggleClass("blur");
    $("#titulo").toggleClass("blur");
    $("#btnProjetoAndroid").toggleClass("blur");
    $("#btnProjetoCordel").toggleClass("blur");
    $("#btnProjetoPokedex").toggleClass("blur");
    $("#menuPokedex").toggle();
})

//Fechar projeto Pokedex
$("#btnVoltarPokedex").click(()=>{
    $("#menuPokedex").hide();
    $("#header").removeClass("blur");
    $("#btnLampOff").removeClass("blur");
    $("#titulo").removeClass("blur");
    $("#btnProjetoAndroid").removeClass("blur");
    $("#btnProjetoCordel").removeClass("blur");
    $("#btnProjetoPokedex").removeClass("blur");
});