const input = require('prompt-sync')();
var mes = Number(input('Informe um número de meses: '));
var anos = ((mes - mes%12)/12);
var meses = mes%12;
console.log(anos, ' ano(s) ', meses, ' mes(es)');