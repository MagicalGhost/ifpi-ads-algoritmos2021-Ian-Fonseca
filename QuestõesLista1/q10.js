const input = require('prompt-sync')();
var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
var quociente = num1/num2;
var resto = num1%num2;
console.log(quociente, resto);