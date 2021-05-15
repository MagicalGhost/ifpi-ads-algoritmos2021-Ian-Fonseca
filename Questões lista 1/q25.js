const input = require('prompt-sync')();
var m = Number(input('Informe um valor em metros: '));
console.log(m, 'm é equivalente a ', (m/1000), 'km');