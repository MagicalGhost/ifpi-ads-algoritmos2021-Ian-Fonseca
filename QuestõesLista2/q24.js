const input = require('prompt-sync')();

function bhaskara(a, b, c) {
    var delta = Math.pow(b, 2) - (4 * a * c);
    var deltaraiz = Math.sqrt(delta);
    var x1 = (-(b) + deltaraiz)/(2 * a);
    var x2 = (-(b) - deltaraiz)/(2 * a);

    if (a == 0) {
        console.log('Não é equação do segundo grau, coeficiente A = 0');
    } else if(delta > 0) {
        console.log('A raiz de delta é: ', deltaraiz, '\nE o resultado da equação com a raiz positiva é: ', x1, '\nE o resultado com a raiz negativa é: ', x2);
    } else if(delta < 0) {
        console.log('Não existe raiz, delta menor que 0');
    } else {
        console.log('Raiz única: ', deltaraiz, '\nResultado da equação: ', x1);
    }
}

var a = Number(input('Informe um valor para o coeficiente A: '));
var b = Number(input('Informe um valor para o coeficiente B: '));
var c = Number(input('Informe um valor para o coeficiente C: '));
bhaskara(a, b , c);