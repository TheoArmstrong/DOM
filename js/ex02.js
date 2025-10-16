var peso, altura, imc

function calcularIMC() {
    document.getElementById("resultadoIMCbaixo").innerHTML = ``
    document.getElementById("resultadoIMCmedio").innerHTML = ``
    document.getElementById("resultadoIMCsobrepso").innerHTML = ``
    document.getElementById("resultadoIMCobesidade").innerHTML = ``


    peso = parseFloat(document.getElementById("peso").value)
    altura = parseFloat(document.getElementById("altura").value)
    imc = peso / (altura * altura)
    if(imc < 18.5){
        document.getElementById("resultadoIMCbaixo").innerHTML = `Seu IMC é: ${imc}`
    }else{
        if(imc<25){
        document.getElementById("resultadoIMCmedio").innerHTML = `Seu IMC é: ${imc}`
        }else{
            if(imc<30){
                document.getElementById("resultadoIMCsobrepso").innerHTML = `Seu IMC é: ${imc}`
            }else{
                document.getElementById("resultadoIMCobesidade").innerHTML = `Seu IMC é: ${imc}`
            }
        }
    }


    
}