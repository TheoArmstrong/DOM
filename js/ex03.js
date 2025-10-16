var usuario, senha

usuario=prompt("Digite seu nome de usuario")
senha=prompt("Digite sua senha")


function confirmar(){
    usuario2=document.getElementById("nome2").value
    senha2=document.getElementById("senha2").value
    if(usuario == usuario2 && senha==senha2){
        alert("Usuario e senha corretos")
    }
    else{
        alert("Usuario ou senha incorretos")
    }

}