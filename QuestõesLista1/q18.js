const input = require('prompt-sync')();
var raio = Number(input('Informe o raio da circunferencia: '));
console.log('O comprimento da circunferencia é: ', (2 * Math.PI * raio));