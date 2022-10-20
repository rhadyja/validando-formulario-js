const formulario = document.querySelector("#cadastro");

formulario.onsubmit = evento => {
    //Receber o valor do campo
    var email = document.querySelector("#email").value;

    if(email === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo email</p>"
    }

    evento.preventDefault();

    var senha = document.querySelector("#senha").value;

    if(senha === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo senha</p>"
    }

    evento.preventDefault();

    var nome = document.querySelector("#nome").value;

    if(nome === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo nome</p>"
    }

    evento.preventDefault();

    var nome_instituicao = document.querySelector("#nome_instituicao").value;

    if(nome_instituicao === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo nome da instituicao</p>"
    }

    evento.preventDefault();

    var uf = document.querySelector("#uf").value;

    if(uf === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo uf</p>"
    }

    evento.preventDefault();

    var cpf = document.querySelector("#cpf").value;

    if(cpf === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo cpf</p>"
    }

    evento.preventDefault();
    
    var celular = document.querySelector("#celular").value;

    if(celular === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo celular</p>"
    }

    evento.preventDefault();

    var municipio = document.querySelector("#municipio").value;

    if(municipio === ""){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo municipio</p>"
    }

    evento.preventDefault();

    var sexo = document.querySelector("#sexo").value;

    while(sexo !== "-------"){
        evento.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p>Necessário preencher o campo sexo</p>"
    }

    evento.preventDefault();
}