const input = require('prompt-sync')();

function funcao(n1, n2){
    if (n1%n2 == 1) {
        console.log(n1 + n2 + (n1%n2));
    } else if(n1%n2 == 2) {
        if (n1%2 == 0) {
            console.log('Primeiro número par!');
        } else {
            console.log('Primeiro número impar!');
        }
        if (n2%2 == 0) {
            console.log('Segundo número par!');
        } else {
            console.log('Segundo número impar!');
        }
    } else if(n1%n2 == 3) {
        console.log((n1 + n2) * n1);
    } else if(n1%n2 == 4) {
        if (n2 != 0) {
            console.log((n1 + n2)/n2);
        } else {
            console.log('Segundo número igual a 0!');
        }
    } else {
        console.log(Math.pow(n1, 2));
        console.log(Math.pow(n2, 2));
    }
}

var num1 = Number(input('Informe um valor inteiro: '));
var num2 = Number(input('Informe outro valor inteiro: '));
funcao(num1, num2);