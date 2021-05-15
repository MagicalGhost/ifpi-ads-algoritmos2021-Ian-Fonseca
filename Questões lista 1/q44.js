const input = require('prompt-sync')();
var lat = Number(input('Informe uma quantidade de latão em kg: '));
console.log('Essa quantidade de latão é constituida por:\n', ((70 * lat)/100), '(70%) de cobre (Cu)\n', ((30 * lat)/100), '(30%) de zinco (Zn)');