const input = require('prompt-sync')();
var lado = Number(input('Informe o valor do lado de um quadrado: '));
 var area = Math.pow(lado, 2);
console.log(area);