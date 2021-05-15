const input = require('prompt-sync')();
var vkm = Number(input('Informe uma velocidade em km/h: '));
console.log('A velocidade informada (' + vkm + 'km/h) é equivalente a ' + (vkm/3.6) + 'm/s');