const input = require('prompt-sync')();
var vm = Number(input('Informe um valor em minutos: '));
console.log('O valor informado em horas e minutos é equivalente a ' + ((vm - vm%60)/60) + 'h ' + (vm%60) + 'min');