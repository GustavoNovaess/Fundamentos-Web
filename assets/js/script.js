/* Maneiras de pegar uma variável
por Tag: getElementByTagName()
por Id = getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

//Validação do Formulário presente na contato.html//
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

// Pokeballs //
let pokeball1 = false;
let pokeball2 = false;
let pokeball3 = false;
let pokeball4 = false;
let pokeball5 = false;
let pokeball6 = false;
let pokeball7 = false;
let pokeball8 = false;

//Ajuste dos campos de formulário//
nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome() {
    let txt = document.querySelector("#txtNome");
    txt.style.fontFamily = 'Impact';
    txt.style.fontSize = '16px';

    if (nome.value.length == 0) {
        txt.style.display = 'none';
    } else if(nome.value.length < 3) {
        txt.style.display = 'block';
        txt.innerHTML = '❌ Nome Inválido';
        txt.style.color = 'red';
        nomeOk = false;
    } else {
        txt.style.display = 'block';
        txt.innerHTML = '✔ Nome Válido'
        txt.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    txtEmail.style.fontFamily = 'Impact';
    txtEmail.style.fontSize = '16px';

    if (email.value.length == 0) {
        txtEmail.style.display = 'none';
    }else if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
        txtEmail.style.display = 'block';
        txtEmail.innerHTML = '❌ Email Inválido';
        txtEmail.innerHTML.fontFamily = 'Impact';
        txtEmail.style.color = 'red';
        emailOk = false;
    } else {
        txtEmail.style.display = 'block';
        txtEmail.innerHTML = '✔ Email Válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
    txtAssunto.style.fontFamily = 'Impact';
    txtAssunto.fontSize = '16px';

    if (assunto.value.length >= 100) {
        txtAssunto.style.padding = '0px';
        txtAssunto.innerHTML = '❌ Limite de 100 caracteres ultrapassado';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
        assuntoOk = false; 
    } else {
        //txtAssunto.innerHTML = '';
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
        return true
    } else {
        alert('Formulário Incorreto, por favor preencha o formulário corretamente.');
        return false;
    }
}

function gifZoom() {
    let gif = document.querySelector('#gif');

    gif.style.width = '600px';
    gif.style.height = '600px';
}

function gifNormal() {
    let gif = document.querySelector('#gif');

    gif.style.width = '400px';
    gif.style.height = '400px';
}

// Funções da pagína pokeball.html//

function escolhoVoce() {
    let pokeball = document.querySelector('#pokeball1')
    if(pokeball1 == false) {
        pokeball.style.display = 'block';
        pokeball1 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball1 = false;
    }

}

function escolhoVoce2() {
    let pokeball = document.querySelector('#pokeball2')
    if(pokeball2 == false) {
        pokeball.style.display = 'block';
        pokeball2 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball2 = false;
    }

}

function escolhoVoce3() {
    let pokeball = document.querySelector('#pokeball3')
    if(pokeball3 == false) {
        pokeball.style.display = 'block';
        pokeball3 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball3 = false;
    }

}

function escolhoVoce4() {
    let pokeball = document.querySelector('#pokeball4')
    if(pokeball4 == false) {
        pokeball.style.display = 'block';
        pokeball4 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball4 = false;
    }

}

function escolhoVoce5() {
    let pokeball = document.querySelector('#pokeball5')
    if(pokeball5 == false) {
        pokeball.style.display = 'block';
        pokeball5 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball5 = false;
    }

}

function escolhoVoce6() {
    let pokeball = document.querySelector('#pokeball6')
    if(pokeball6 == false) {
        pokeball.style.display = 'block';
        pokeball6 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball6 = false;
    }

}

function escolhoVoce7() {
    let pokeball = document.querySelector('#pokeball7')
    if(pokeball7 == false) {
        pokeball.style.display = 'block';
        pokeball7 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball7 = false;
    }

}

function escolhoVoce8() {
    let pokeball = document.querySelector('#pokeball8')
    if(pokeball8 == false) {
        pokeball.style.display = 'block';
        pokeball8 = true;
    } else {
        pokeball.style.display = 'none';
        pokeball8 = false;
    }

}