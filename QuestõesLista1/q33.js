const input = require('prompt-sync')();
var num = Number(input('Informe um valor inteiro de 3 digitos: '));
var inverso = ((num%10 * 100) + (((num - num%10)%100)) + ((num - num%100)/100));
var soma = num + inverso;
console.log(soma);