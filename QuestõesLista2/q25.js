const input = require('prompt-sync')();

function validador(s) {
    if (senha == '1234') {
        console.log('Senha correta, acesso aprovado!');
    } else {
        console.log('Senha incorreta, acesso negado');
    }
}

var senha = String(input('Password: '));
validador(senha);