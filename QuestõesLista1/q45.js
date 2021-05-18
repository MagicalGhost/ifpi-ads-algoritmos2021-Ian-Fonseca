const input = require('prompt-sync')();
var saque = Number(input('Quanto você deseja sacar? '));
var not50 = (saque - saque%50)/50;
var not10 = ((saque - not50 * 50) - (saque - not50 * 50)%10)/10;
var not5 = (saque - (((saque - (not50 * 50 + not10 * 10))%5) + (not10 * 10) + (not50 * 50)))/5;
var not1 = saque - (((saque - (((saque - (not50 * 50 + not10 * 10))%5) + (not10 * 10) + (not50 * 50)))) + (((saque - not50 * 50) - (saque - not50 * 50)%10)) + ((saque - saque%50)))
console.log((not50), 'nota(s) de R$ 50,00\n', (not10), 'nota(s) de R$ 10,00\n', (not5), 'nota(s) de R$ 5,00\n', (not1), 'nota(s) de R$ 1,00');