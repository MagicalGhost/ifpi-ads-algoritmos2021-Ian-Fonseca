const input = require('prompt-sync')();

function primo(num){
    if (num > 0 && num < 100) {
        if (num == 2 || num == 3 || num == 5 || num == 7) {
            console.log('Número primo!');
        } else {
            if ((num%2 == 0) || (num%3 == 0) || (num%5 == 0) || (num%7 == 0)) {
                console.log('Número não primo!');
            } else {
                console.log('Número primo!');
            }
        }
    } else {
        console.log('O númerp informado deve ser entre 0 e 100!');
    }
}

var numero = Number(input('Informe um valor entre 0 e 100: '));
primo(numero);