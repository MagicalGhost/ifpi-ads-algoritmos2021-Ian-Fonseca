const input = require('prompt-sync')();
var valor = Number(input('Informe o valor da mercadoria: '));
if (valor%3 == 0) {
    console.log('Valor de entrada: R$ ', (valor/3), '\nPrestação 1: R$ ', (valor/3), '\nPrestação 2: R$ ', (valor/3));
} else {
    console.log('Valor de entrada: R$ ', (((valor - valor%3)/3) + (valor%3)), '\nPrestação 1: R$ ', ((valor - valor%3)/3), '\nPrestação 2: R$ ', ((valor - valor%3)/3));
}