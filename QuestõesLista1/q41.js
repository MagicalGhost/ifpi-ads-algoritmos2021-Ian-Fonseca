const input = require('prompt-sync')();
var cf = Number(input('Informe o custo de fábrica do carro: '));
var cc = (cf + ((cf * 28)/100) + ((cf * 45)/100));
console.log(cc);