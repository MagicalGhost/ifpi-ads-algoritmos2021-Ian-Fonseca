const input = require('prompt-sync')();

function maiormenor(num1, num2, num3, num4, num5){
    var maior = 0;
    var menor = 0;
    if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
        maior = num1;
    } else if(num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
        maior = num2;
    } else if(num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
        maior = num3;
    } else if(num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
        maior = num4;
    } else {
        maior = num5;
    }
    if (num1 <= num2 && num1 <= num3 && num1 <= num4 && num1 <= num5) {
        menor = num1;
    } else if(num2 <= num1 && num2 <= num3 && num2 <= num4 && num2 <= num5) {
        menor = num2;
    } else if(num3 <= num1 && num3 <= num2 && num3 <= num4 && num3 <= num5) {
        menor = num3;
    } else if(num4 <= num1 && num4 <= num2 && num4 <= num3 && num4 <= num5) {
        menor = num4;
    } else {
        menor = num5;
    }
    console.log('Maior número: ', maior, '\nMenor número: ', menor);
}

var num1 = Number(input('Informe o valor do primeiro número: '));
var num2 = Number(input('Informe o valor do segundo número: '));
var num3 = Number(input('Informe o valor do terceiro número: '));
var num4 = Number(input('Informe o valor do quarto número: '));
var num5 = Number(input('Informe o valor do quinto número: '));
maiormenor(num1, num2, num3, num4, num5);