const input = require('prompt-sync')();
var seg = Number(input('Informe um valor de segundos: '));
var horas = ((seg - seg%3600)/3600);
var minutos = (((seg - seg%60)/60)%60);
var segundos = seg%60;
console.log(horas, 'h ', minutos, 'm ', segundos, 's');