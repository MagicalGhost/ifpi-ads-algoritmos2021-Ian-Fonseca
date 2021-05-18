const input = require('prompt-sync')();
var dias = Number(input('Informe um valor de dias: '));
var semanas = (dias - dias%7)/7;
var dia = dias%7;
console.log(semanas , 'semanas e ', dia, ' dia(s)');