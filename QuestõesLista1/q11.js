const input = require('prompt-sync')();
var num = Number(input('Informe um valor inteiro de 3 digitos: '));
var digito1 = num%10;
var digito2 = ((num - num%10)%100)/10;
var digito3 = (num - num%100)/100;
console.log(digito1, digito2, digito3);