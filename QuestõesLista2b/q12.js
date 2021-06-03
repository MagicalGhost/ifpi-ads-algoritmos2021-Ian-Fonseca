const input = require('prompt-sync')();

var num = Number(input('Informe um número: '));

if (num%1 == 0) {
    console.log('Número inteiro!');
} else {
    console.log('Número decimal!');
}