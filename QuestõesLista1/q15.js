const input = require('prompt-sync')();
var base = Number(input('Informe o valor da base do triangulo: '));
var h = Number(input('Informe o valor da altura do triangulo: '));
console.log('A área do triangulo é: ', (base * h)/2);