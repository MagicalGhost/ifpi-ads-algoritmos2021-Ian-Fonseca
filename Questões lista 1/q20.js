const input = require('prompt-sync')();
var tempc = Number(input('Informe uma temperatura em °C (Celsius): '));
console.log('A temperatura informada em °F (Farenheit) é: ', ((9 * tempc + 160)/5));