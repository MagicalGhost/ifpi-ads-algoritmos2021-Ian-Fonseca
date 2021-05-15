const input = require('prompt-sync')();
var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
var num3 = Number(input('Informe o terceiro número: '));
console.log('A soma dos dois primeiros números informados é: ' + (num1 + num2) + '\nA diferença dos dois ultimos números informados é: ' + (num2 - num3));