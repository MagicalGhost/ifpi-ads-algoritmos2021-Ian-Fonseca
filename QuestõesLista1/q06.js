const input = require('prompt-sync')();
var vkm = Number(input('Informe uma velocidade em km/h: '));
var vms = vkm/3.6;
console.log(vms);