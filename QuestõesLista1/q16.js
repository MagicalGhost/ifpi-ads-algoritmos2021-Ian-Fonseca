const input = require('prompt-sync')();
var lado = Number(input('Informe o valor do lado de um quadrado: '));
console.log('A área do quadrado é: ', Math.pow(lado, 2));