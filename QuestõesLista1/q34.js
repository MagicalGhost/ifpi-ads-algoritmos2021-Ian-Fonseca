const input = require('prompt-sync')();
var x = Number(input('Informe o primeiro valor: '));
var y = Number(input('Informe o segundo valor: '));
var z = Number(input('Informe o terceiro valor: '));
console.log('A média dos três valores é: ', (x + y + z)/3);