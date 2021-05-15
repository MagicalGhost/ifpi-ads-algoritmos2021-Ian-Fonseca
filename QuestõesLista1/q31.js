const input = require('prompt-sync')();
var bin = String(input('Informe um valor de 4 digitos binarios: '));
var dec = 0;
for(let i = 0; i < bin.length; i++) {
    dec += Math.pow(2, i) * bin[bin.length - i - 1];
};
console.log('O número informado em decimal é: ', dec);