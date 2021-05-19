const input = require('prompt-sync')();
var num = Number(input('Informe um valor inteiro de 3 digitos: '));
var soma = (num%10 + ((num - num%10)%100)/10 + (num - num%100)/100);
console.log(soma);