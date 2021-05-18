const input = require('prompt-sync')();
var vm = Number(input('Informe um valor em minutos: '));
var horas = (vm - vm%60)/60;
console.log((horas) + 'h ' + (vm%60) + 'min');