const input = require('prompt-sync')();
var horas = Number(input('Informe um valor de horas: '));
console.log('O número fornecido é equivalente a: ', ((horas - horas%168)/168), 'sem ', (((horas - horas%24)/24)%24 - (7 * (horas - horas%168)/168)), 'dia(s) ', (horas%24), 'h');