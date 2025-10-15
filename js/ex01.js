var valorDolar, quantReais, quantDolars

function converter() {
    valorDolar = parseFloat(document.getElementById("valordolar").value)
    quantReais = parseFloat(document.getElementById("quantreal").value)
    quantDolars = quantReais / valorDolar
    document.getElementById("quantreais").innerHTML = `Voce tem U$:${quantDolars}`
}