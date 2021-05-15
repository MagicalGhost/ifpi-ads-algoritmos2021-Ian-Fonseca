const input = require('prompt-sync')();
var km = Number(input('Informe um valor em km: '));
console.log('O valor fornecido é equivalente a '+ (km * 1000) + 'm');