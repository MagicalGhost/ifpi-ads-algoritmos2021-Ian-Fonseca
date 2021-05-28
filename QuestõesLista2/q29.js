const input = require('prompt-sync')();

function quadradoperfeito(n) {
    var dig2 = n%100;
    var dig1 = (n - dig2)/100;
    var soma = dig1 + dig2;
    if (n >= 1000 && n <= 9999) {
        if (Math.sqrt(n) == soma) {
            console.log('Quadrado perfeito!');
        } else {
            console.log('Não é um quadrado perfeito!');
        }
    } else {
        console.log('O valor deve conter apenas 4 digitos!');
    }
}

var num = Number(input('Informe um valor de 4 digitos: '));
quadradoperfeito(num);