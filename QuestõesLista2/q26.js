const input = require('prompt-sync')();

function hipotenusaCheck(l1, l2, l3) {
    if (l1 > l2 && l1 > l3) {
        console.log('Primeiro lado informado é a hipotenusa!');
    } else if(l2 > l1 && l2 > l3) {
        console.log('Segundo lado informado é a hipotenusa!');
    } else if(l3 > l1 && l3 > l2) {
        console.log('Terceiro lado informado é a hipotenusa!');
    } else {
        console.log('Os dois maiores, ou todos, lados são iguais!');
    }
}

var lado1 = Number(input('Informe o primeiro lado do triangulo: '));
var lado2 = Number(input('Informe o segundo lado do triangulo: '));
var lado3 = Number(input('Informe o terceiro lado do triangulo: '));
hipotenusaCheck(lado1, lado2, lado3);