const input = require('prompt-sync')();
var a = Number(input('Informe um valor para A: '));
var b = Number(input('Informe um valor para B: '));
var c = Number(input('Informe um valor para C: '));
console.log('R = ', (Math.pow((a + b), 2)), '\nS = ', (Math.pow((b + c), 2)), '\nD = ', ((Math.pow((a + b), 2) + Math.pow((b + c), 2))/2));