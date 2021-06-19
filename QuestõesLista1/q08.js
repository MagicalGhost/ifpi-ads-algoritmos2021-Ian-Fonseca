const input = require('prompt-sync')();
var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
var divisao_da_soma_pela_diferenca = (num1 + num2)/(num1 - num2);
console.log(divisao_da_soma_pela_diferenca);