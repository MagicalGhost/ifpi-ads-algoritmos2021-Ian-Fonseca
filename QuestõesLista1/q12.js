const input = require('prompt-sync')();
var salario = Number(input('Informe o salário: '));
var aumento = salario + (salario * 25)/100
console.log(aumento);