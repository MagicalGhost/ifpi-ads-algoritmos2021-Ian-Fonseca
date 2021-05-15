const input = require('prompt-sync')();
var dias = Number(input('Informe um valor de dias: '));
console.log('O valor informado é igual a ', (dias - dias%7)/7, 'semanas e ', (dias%7), ' dia(s)');