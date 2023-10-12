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