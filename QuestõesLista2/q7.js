const input = require('prompt-sync')();

function triangulo(lado1, lado2, lado3){
    if((lado1 != 0 && lado2 != 0 && lado3 != 0) && (lado1 + lado2) >= lado3){
        if (lado1 == lado2 && lado2 == lado3) {
            console.log('Triangulo equilátero!');
        } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
            console.log('Triangulo isósceles!');
        } else if(lado1 != lado2 && lado2 != lado3){
            console.log('Triangulo escaleno!');
        }
    } else {
        console.log('Você informou um lado igual a 0, não existe lado de tamanho 0!\nOU\nA soma dos dois primeiros lados informados é maior que o terceiro lado!');
    }
}

var lado_1 = Number(input('Informe o primeiro lado: '));
var lado_2 = Number(input('Informe o segundo lado: '));
var lado_3 = Number(input('Informe o terceiro lado: '));
triangulo(lado_1, lado_2, lado_3);