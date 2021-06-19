const input = require('prompt-sync')();

var nota1 = Number(input('Informe a primeira nota do aluno: '));
var nota2 = Number(input('Informe a segunda nota do aluno: '));
var media = (nota1 + nota2)/2;

if (media == 10) {
    console.log('Aprovado com distinção!');
} else if(media < 7) {
    console.log('Reprovado!');
} else if(media >= 7) {
    console.log('Aprovado!');
}