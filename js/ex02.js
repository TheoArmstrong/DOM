var peso, altura, imc

function calcularIMC() {
    peso = parseFloat(document.getElementById("peso").value)
    altura = parseFloat(document.getElementById("altura").value)
    imc = peso / (altura * altura)
    if(imc < 18.5){
        document.getElementById("resultadoIMC").innerHTML = `Seu IMC é: ${imc}`

    }

    
}