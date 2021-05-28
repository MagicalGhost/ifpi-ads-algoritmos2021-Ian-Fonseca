const input = require('prompt-sync')();

function quadrante(ang){
    if (ang >= 0 && ang <= 90) {
        console.log('Primeiro quadrante!');
    } else if(ang > 90 && ang <= 180) {
        console.log('Segundo quadrante!');
    } else if(ang > 180 && ang <= 270) {
        console.log('Terceiro quadrante!');
    } else if (ang > 270 && ang <= 360) {
        console.log('Quarto quadrante!');
    } else {
        console.log('Ângulo informado invalido!');
    }
}

var angulo = Number(input('Informe a medida de um ângulo (0° - 360°): '));
quadrante(angulo);