const input = require('prompt-sync')();
var nota1 = Number(input('Informe a primeira nota do aluno: '));
var peso1 = Number(input('Informe o peso da primeira nota: '));
var nota2 = Number(input('Informe a segunda nota do aluno: '));
var peso2 = Number(input('Informe o peso da segunda nota: '));
var nota3 = Number(input('Informe a terceira nota do aluno: '));
var peso3 = Number(input('Informe o peso da terceira nota: '));
var media_ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3))/(peso1 + peso2 + peso3);
console.log(media_ponderada);