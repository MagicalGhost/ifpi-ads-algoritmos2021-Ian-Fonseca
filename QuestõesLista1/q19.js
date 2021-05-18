const input = require('prompt-sync')();
var r = Number(input('Informe o valor do raio da esfera: '));
var volume_da_esfera = (4 * Math.PI * Math.pow(r, 3)/3);
console.log(volume_da_esfera);