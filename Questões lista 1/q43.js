const input = require('prompt-sync')();
var a = Number(input('Informe o valor de a: '));
var b = Number(input('Informe o valor de b: '));
var c = Number(input('Informe o valor de c: '));
var d = Number(input('Informe o valor de d: '));
var e = Number(input('Informe o valor de e: '));
var f = Number(input('Informe o valor de f: '));
console.log('x = ', (((c * e) - (b * f))/((a * e) - (b * d))), '\ny = ', (((a * f) - (c * d))/((a * e) - (b * d))));