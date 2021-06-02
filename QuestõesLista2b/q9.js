const input = require('prompt-sync')();

var num = Number(input('Informe um número correspondente ao dia da semana(1-7): '));
if (num == 1) {
    console.log('Domingo');
} else if(num == 2) {
    console.log('Segunda');
} else if(num == 3) {
    console.log('Terça');
} else if(num == 4) {
    console.log('Quarta');
} else if(num == 5) {
    console.log('Quinta');
} else if(num == 6) {
    console.log('Sexta');
} else if(num == 7) {
    console.log('Sábado');
} else {
    console.log('Valor inválido');
}