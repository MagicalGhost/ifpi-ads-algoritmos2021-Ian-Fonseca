const input = require('prompt-sync')();
var r = Number(input('Informe o valor do raio da esfera: '));
console.log('O volume da esfera é: ', ((4 * Math.PI * Math.pow(r, 3)/3)));