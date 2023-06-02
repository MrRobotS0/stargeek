const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        dados.forEach(elemento => {
            let validar = dados.find(elemento => elemento.emailcliente==email);
            if (validar){
            evento.preventDefault();
            } else {
            criarUsuario(evento);
            }
        }
        );
    }
}

formulario.onsubmit = (evento) =>{
     if (email.value == ""){
        evento.preventDefault();
        email.focus();
        return null;
    }

    if (senha.value == ""){
        evento.preventDefault();
        senha.focus();
        return null;
    }
    verificarEmail(email.value, evento);
}


function criarUsuario(evento){
    let dados = JSON.parse(localStorage.getItem("bd")) || [];
    dados.push(
        {   
        emailcliente : email.value,
        senhacliente : senha.value
        }
    )
    localStorage.setItem("bd", JSON.stringify(dados));
    evento.preventDefault();
    window.location.assign("login.html");
}