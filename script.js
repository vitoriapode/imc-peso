function calcular(){
    var fPeso = parseFloat(document.getElementById("peso").value)
    var fAltura = parseFloat(document.getElementById("altura").value)
    var fimc = fPeso/(fAltura*fAltura)
    document.getElementById("imc").innerHTML = fimc.toFixed(2)
    if(fimc<18.5){
        document.getElementById("status").innerHTML = "STATUS: BAIXO PESO"
    }else if(fimc<=24.9){
        document.getElementById("status").innerHTML = "STATUS: PESO IDEAL"
    }else if(fimc<=29.9){
        document.getElementById("status").innerHTML = "STATUS: SOBREPESO"
    }else if(fimc<=34.9){
        document.getElementById("status").innerHTML = "STATUS: OBESIDADE 1"
    }else if(fimc<=39.9){
        document.getElementById("status").innerHTML = "STATUS: OBESIDADE 2"
    }else{
        document.getElementById("status").innerHTML = "STATUS: OBESIDADE MORBIDA"
    }

}