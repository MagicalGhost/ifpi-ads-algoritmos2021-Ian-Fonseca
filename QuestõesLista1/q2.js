const input = require('prompt-sync')();
var vh = Number(input('Informe um valor em horas: '));
var vm = Number(input('Informe um valor em minutos: '));
var total = (vh * 60) + vm
console.log(total);