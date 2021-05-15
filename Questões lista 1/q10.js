const input = require('prompt-sync')();
var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
console.log('Quociente da divisão do primeiro número pelo segundo: ' + (num1/num2) + '\nResto da divisão do primeiro pelo segundo: ' + (num1%num2));