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