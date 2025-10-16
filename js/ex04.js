var n1, razao, quant, list=[];

function confirmar(){
    document.getElementById("lista").innerHTML = ``
    n1=parseFloat(document.getElementById("n1").value)
    razao=parseFloat(document.getElementById("razao").value)
    quant=parseInt(document.getElementById("quant").value)

    for(i=0;i<quant;i++){
        list.push(n1+razao*i)
    }
    document.getElementById("lista").innerHTML = `${list}`


}
