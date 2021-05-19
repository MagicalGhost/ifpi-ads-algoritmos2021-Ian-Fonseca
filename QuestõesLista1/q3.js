const input = require('prompt-sync')();
var vm = Number(input('Informe um valor em minutos: '));
var horas = (vm - vm%60)/60;
var min = vm%60;
console.log((horas) + 'h ' + (min) + 'min');