const input = require('prompt-sync')();

function fimc(h, p){
    var imc = p/(Math.pow(h, 2));
    if (imc < 25) {
        console.log('Peso normal!');
    } else if(imc >= 25 && imc <= 30) {
        console.log('Obeso!');
    } else {
        console.log('Obesidade mórbida!');
    }
}

var altura = Number(input('Informe a altura (em metros): '));
var peso = Number(input('Informe o peso: '));
fimc(altura, peso);