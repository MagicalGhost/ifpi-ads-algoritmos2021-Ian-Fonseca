const input = require('prompt-sync')();

function parimpar(num){
    if (num%2 == 0) {
        console.log('Número par!');
    } else {
        console.log('Número impar!');
    }
}

var numero = Number(input('Informe um valor: '));
parimpar(numero);