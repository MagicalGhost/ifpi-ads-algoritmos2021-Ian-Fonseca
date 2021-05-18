const input = require('prompt-sync')();
var tf = Number(input('Informe uma temperatura em °F (Farenheit): '));
var tc = (5 * tf - 160)/9;
console.log(tc);