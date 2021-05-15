const input = require('prompt-sync')();
var vms = Number(input('Informe a velocidade em m/s: '));
console.log('A velocidade informada (' + vms + 'm/s) é equivalente a ' + (vms*3.6) + 'km/h');