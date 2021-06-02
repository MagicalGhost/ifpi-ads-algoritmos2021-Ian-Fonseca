const input = require('prompt-sync')();

var nota1 = Number(input('Informe a primeira nota: '));
var nota2 = Number(input('Informe a segunda nota: '));
var nota3 = Number(input('Informe a terceira nota: '));
var nota4 = Number(input('Informe a quarta nota: '));
var media = (nota1 + nota2 + nota3 + nota4)/4;

if (media >= 0 && media < 4) {
    console.log('Notas: ', nota1, nota2, nota3, nota4, '\nMédia: ', media, '\nConceito: E\nSituação: Reprovado!');
} else if(media >= 4 && media < 6) {
    console.log('Notas: ', nota1, nota2, nota3, nota4, '\nMédia: ', media, '\nConceito: D\nSituação: Reprovado!');
} else if(media >= 6 && media < 7.5) {
    console.log('Notas: ', nota1, nota2, nota3, nota4, '\nMédia: ', media, '\nConceito: C\nSituação: Aprovado!');
} else if(media >= 7.5 && media < 9) {
    console.log('Notas: ', nota1, nota2, nota3, nota4, '\nMédia: ', media, '\nConceito: B\nSituação: Aprovado!');
} else if(media >= 9 && media <= 10) {
    console.log('Notas: ', nota1, nota2, nota3, nota4, '\nMédia: ', media, '\nConceito: A\nSituação: Aprovado!');
} else {
    console.log('Você fez algo de muito errado!');
}