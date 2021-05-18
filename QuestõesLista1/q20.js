const input = require('prompt-sync')();
var tempc = Number(input('Informe uma temperatura em °C (Celsius): '));
var tempf = (9 * tempc + 160)/5;
console.log(tempf);