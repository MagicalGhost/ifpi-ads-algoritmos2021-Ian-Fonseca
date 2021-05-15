const input = require('prompt-sync')();
var dollar = Number(input('Informe um valor em dollar: '));
console.log('O valor informado em dollar é equivalente a R$'+ (dollar * 5.22) + ' na cotação atual(11/05/2021 - 5,22)');