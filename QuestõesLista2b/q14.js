const input = require('prompt-sync')();

var tipo = String(input('Informe o tipo de combustível(G - gasolina; A - Alcool): '));
var litros = Number(input('Informe a quantidade de litros vendidos: '));
var valor;

if (tipo == 'A' || tipo == 'a') {
    valor = 1.9 * litros;
    if (litros <= 20) {
        console.log('Valor a ser pago: ', (valor - valor * 0.03));
    } else {
        console.log('Valor a ser pago: ', (valor - valor * 0.05));
    }
} else if(tipo == 'G' || tipo == 'g') {
    valor = 2.5 * litros;
    if (litros <= 20) {
        console.log('Valor a ser pago: ', (valor - valor * 0.04));
    } else {
        console.log('Valor a ser pago: ', (valor - valor * 0.06));
    }
}