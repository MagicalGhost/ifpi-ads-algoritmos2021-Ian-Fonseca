const input = require('prompt-sync')();
var kg = Number(input('Informe um valor em kg: '));
console.log('O valor fornecido em gramas é equivalente a ' + (kg * 1000) + 'g');