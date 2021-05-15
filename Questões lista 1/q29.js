const input = require('prompt-sync')();
var mes = Number(input('Informe um número de meses: '));
console.log('O número fornecido é equivalente a: ', ((mes - mes%12)/12), ' ano(s) ', (mes%12), ' mes(es)');