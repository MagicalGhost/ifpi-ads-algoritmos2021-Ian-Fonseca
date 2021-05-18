const input = require('prompt-sync')();
var raio = Number(input('Informe o raio da circunferencia: '));
var comprimento_da_circunferencia = 2 * Math.PI * raio
console.log(comprimento_da_circunferencia);