const input = require('prompt-sync')();
var min = Number(input('Informe um valor de minutos: '));
console.log('O valor fornecido em minutos é equivalente a: ', ((min - min%1440)/1440), ' dia(s) ', ((min - ((min - min%1440) + ((min%1440)%60)))/60), ' h ', ((min%1440)%60), ' min');