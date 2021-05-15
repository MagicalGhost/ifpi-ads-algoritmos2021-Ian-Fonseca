const input = require('prompt-sync')();
var tf = Number(input('Informe uma temperatura em °F (Farenheit): '));
console.log('Aa temperatura informada em °C (Celsius) é: ', ((5 * tf - 160)/9));