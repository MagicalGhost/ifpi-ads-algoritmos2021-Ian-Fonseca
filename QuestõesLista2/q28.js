const input = require('prompt-sync')();

function funcArea(l1, l2){
    var area = x * y;
    if (area >= 0) {
        console.log('Área do retangulo formado: ', area);
    } else {
        area = area * (-1);
        console.log('Área do retangulo formado: ', area);
    }
}

var x = Number(input('Informe o valor da coordenada x: '));
var y = Number(input('Informe o valor da coordenada y: '));
funcArea(x, y);