const input = require('prompt-sync')();
var anos = Number(input('Informe quantos anos você possui: '));
var meses = Number(input('Informe quantos meses você possui: '));
var dias = Number(input('Informe quantos dias você possui: '));
var total = ((anos * 365) + (meses * 30) + dias);
console.log(total);