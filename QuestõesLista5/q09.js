const input = require('prompt-sync')();

function main() {
    let senha = input('Informe sua senha: ');
    console.clear();

    console.log(acesso(senha));
}

function acesso(s) {
    if (s == 'coxinha de frango') {
        return true;
    } else {
        return false;
    }
}

main();