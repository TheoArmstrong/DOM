var v1, v2, r;
function somar(){
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1=="" || v2==""){
        alert("Os campos devem estra preenchidos");
    }
    else{
        r=parseFloat(v1)+parseFloat(v2);
        document.getElementById("resultado").innerHTML=`o resultrado da soma é: ${r}`
    }
}

function multiplica(){
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1=="" || v2==""){
        alert("Os campos devem estra preenchidos");
    }
    else{
        r=parseFloat(v1)*parseFloat(v2);
        document.getElementById("resultado").innerHTML=`o resultrado da multiplicação é: ${r}`
    }
}

function dividir(){
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1=="" || v2=="" || v2==0){
        alert("Campos invalidos");
}else{
    r=parseFloat(v1)/parseFloat(v2)
    document.getElementById("resultado").innerHTML=`o resultado da divisão entre os valores é: ${r}`
}
}

function subtrair(){
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1=="" || v2==""){
        alert("Os campos devem estra preenchidos");
    }   
    else{
        r=parseFloat(v1)-parseFloat(v2);
        document.getElementById("resultado").innerHTML=`o resultrado da subtração é: ${r}`
    }
}