const input = require('prompt-sync')();

var num = Number(input('Informe um número: '));

if (num > -1) {
    console.log('Número positivo');
} else {
    console.log('Número negativo');
}