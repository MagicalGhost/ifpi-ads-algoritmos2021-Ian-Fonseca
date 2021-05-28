const input = require('prompt-sync')();

function maiores(med, num1, num2, num3, num4, num5) {
    if (num1 > med) {
        console.log('primeiro número maior que a média!');
    }
    if(num2 > med){
        console.log('segundo número maior que a média!');
    }
    if(num3 > med){
        console.log('terceiro número maior que a média!');
    }
    if(num4 > med){
        console.log('quarto número maior que a média!');
    }
    if(num5 > med){
        console.log('quinto número maior que a média!');
    }
    console.log('Média: ', med);
}

var num1 = Number(input('Informe o valor do primeiro número: '));
var num2 = Number(input('Informe o valor do segundo número: '));
var num3 = Number(input('Informe o valor do terceiro número: '));
var num4 = Number(input('Informe o valor do quarto número: '));
var num5 = Number(input('Informe o valor do quinto número: '));
var media = (num1 + num2 + num3 + num4 + num5)/5;
maiores(media, num1, num2, num3, num4, num5);