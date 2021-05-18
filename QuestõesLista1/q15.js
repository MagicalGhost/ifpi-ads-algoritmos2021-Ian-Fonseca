const input = require('prompt-sync')();
var base = Number(input('Informe o valor da base do triangulo: '));
var h = Number(input('Informe o valor da altura do triangulo: '));
var area = (base * h)/2
console.log(area);