const input = require('prompt-sync')();
var vms = Number(input('Informe uma velocidade em m/s: '));
var vkmh = vms * 3.6;
console.log(vkmh);