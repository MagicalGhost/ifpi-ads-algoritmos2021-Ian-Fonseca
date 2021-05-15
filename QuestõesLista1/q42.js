const input = require('prompt-sync')();
var x1 = Number(input('Informe o valor de x1: '));
var y1 = Number(input('Informe o valor de y1: '));
var x2 = Number(input('Informe o valor de x2: '));
var y2 = Number(input('Informe o valor de y2: '));
console.log('A distancia entre os pontos é de: ', (Math.sqrt((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))))));