const input = require('prompt-sync')();
var vr = Number(input('Informe um valor em real (R$): '));
console.log('70% do valor em real: ' + ((vr * 70)/100));