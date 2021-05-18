const input = require('prompt-sync')();
var lat = Number(input('Informe uma quantidade de latão em kg: '));
var cobre = ((70 * lat)/100);
var zinco = ((30 * lat)/100);
console.log(cobre, '(70%) de cobre (Cu)\n', zinco, '(30%) de zinco (Zn)');