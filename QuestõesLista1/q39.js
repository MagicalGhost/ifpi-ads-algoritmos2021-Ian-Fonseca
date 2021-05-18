const input = require('prompt-sync')();
var a = Number(input('Informe um valor para A: '));
var b = Number(input('Informe um valor para B: '));
var c = Number(input('Informe um valor para C: '));
var r = (Math.pow((a + b), 2));
var s = (Math.pow((b + c), 2));
var d = ((r + s)/2);
console.log('R = ', r, '\nS = ', s, '\nD = ', d);