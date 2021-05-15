const input = require('prompt-sync')();
var seg = Number(input('Informe um valor de segundos: '));
console.log('O numero fornecido é equivalente a: ', ((seg - seg%3600)/3600), 'h ', (((seg - seg%60)/60)%60), 'm ', (seg%60), 's');