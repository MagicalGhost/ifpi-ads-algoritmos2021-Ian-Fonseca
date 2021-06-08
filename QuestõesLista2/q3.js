const input = require('prompt-sync')();

function compara(num1, num2, num3){
    if (num1 > num2 && num1 > num3 || num1 > num2 && num1 == num3 || num1 == num2 && num1 >num3) {
        console.log('O maior número é: ', num1);
    } else if(num2 > num1 && num2 > num3 || num2 > num1 && num2 == num3) {
        console.log('O maior número é: ', num2);
    } else if(num3 > num1 && num3 > num2){
        console.log('O maior número é: ', num3);
    } else {
        console.log('Números iguais!');
    }
}

function main() {
    var num1 = Number(input('Informe o primeiro número: '));
    var num2 = Number(input('Informe o segundo número: '));
    var num3 = Number(input('Informe o terceiro número: '));
    compara(num1, num2, num3);
}

 main();