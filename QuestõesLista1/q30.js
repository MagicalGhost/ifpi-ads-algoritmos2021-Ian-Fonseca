const input = require('prompt-sync')();
var min = Number(input('Informe um valor de minutos: '));
var dias = ((min - min%1440)/1440);
var horas = ((min - ((min - min%1440) + ((min%1440)%60)))/60);
var minutos = ((min%1440)%60);
console.log(dias, ' dia(s) ', horas, ' h ', minutos, ' min');