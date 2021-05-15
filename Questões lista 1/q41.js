const input = require('prompt-sync')();
var cf = Number(input('Informe o custo de fábrica do carro: '));
console.log('O custo do consumidor deste carro é de: ', (cf + ((cf * 28)/100) + ((cf * 45)/100)));