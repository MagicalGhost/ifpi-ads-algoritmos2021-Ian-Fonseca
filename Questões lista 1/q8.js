const input = require('prompt-sync')();
var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
console.log('A divisão da soma pela diferença dos números informados é: ' + ((num1 + num2)/(num1 - num2)));