const input = require('prompt-sync')();
var num = Number(input('Informe um valor de até 4 digitos: '));
var soma = ((num%10) + (((num - num%10)/10)%10) + (((num - num%100)/100)%10) + ((num - num%1000)/1000));
console.log(soma);