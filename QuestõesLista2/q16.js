const input = require('prompt-sync')();

function avalia(n1, n2){
    var media = (n1 + n2)/2;
    if (media >= 7) {
        console.log('Aprovado');
    } else {
        var notaExame = Number(input('Informe a nota do exame final: '));
        media = (n1 + n2 + notaExame)/3;
        if (media >= 5) {
            console.log('Aprovado');
        } else {
            console.log('Reprovado');
        }
    }
}

var nota1 = Number(input('Informe a primeira nota: '));
var nota2 = Number(input('Informe a segunda nota: '));
avalia(nota1, nota2);