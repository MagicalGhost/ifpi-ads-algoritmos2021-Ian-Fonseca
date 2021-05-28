const input = require('prompt-sync')();

function quadradoSemSentido(n) {
    var dig2 = n%100;
    var dig1 = (n - dig2)/100;
    var soma = dig1 + dig2;
    if (n >= 1000 && n <= 9999) {
        if (Math.pow(soma, 2) == n) {
            console.log('O número digitado obedece essa caracteristica!');
        } else {
            console.log('O número digitado não obedece a caracteristica!');
        }
    } else {
        console.log('O valor deve conter apenas 4 digitos!');
    }
}

var num = Number(input('Informe um valor de 4 digitos: '));
quadradoSemSentido(num);