const input = require('prompt-sync')();
var horas = Number(input('Informe um valor de horas: '));
var semanas = ((horas - horas%168)/168);
var dias = ((horas - horas%24)/24)%24 - (7 * semanas);
var hr = horas%24;
console.log(semanas , 'sem ', dias, 'dia(s) ', hr, 'h');