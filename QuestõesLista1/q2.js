const input = require('prompt-sync')();
var vh = Number(input('Informe um valor em horas: '));
var vm = Number(input('Informe um valor em minutos: '));
console.log('O valor total em minutos é equivalente a ' + ((vh * 60) + vm) + 'minutos');