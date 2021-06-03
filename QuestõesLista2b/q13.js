const input = require('prompt-sync')();

var p1 = Number(input('Telefonou para a vítima? (0 - não; 1 - sim): '));
var p2 = Number(input('Esteve no local do crime? '));
var p3 = Number(input('Mora perto da vítima? '));
var p4 = Number(input('Devia para a vítima? '));
var p5 = Number(input('Já trabalhou com a vítima? '));
var resposta = p1 + p2 + p3 + p4 + p5;

if (resposta == 2) {
    console.log('Suspeita!');
} else if(resposta == 3 || resposta == 4) {
    console.log('Cúmplice!');
} else if(resposta == 5) {
    console.log('Assasino!');
} else if(resposta == 1) {
    console.log('Inocente!');
} else {
    console.log('Utilize 0 para respostas negativas e 1 para respostas positivas!');
}