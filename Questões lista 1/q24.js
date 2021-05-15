const input = require('prompt-sync')();
var m = Number(input('Informe um valor em metros: '));
console.log('O valor fornecido em centimetros é equivalente a '+ (m * 100) +'cm');