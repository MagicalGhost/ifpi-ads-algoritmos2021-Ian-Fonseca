const input = require('prompt-sync')();

var turno = String(input('Informe o turno que o aluno estuda: '));

if (turno == 'M') {
    console.log('Bom dia!');
} else if(turno == 'V') {
    console.log('Boa tarde!');
} else if(turno == 'N') {
    console.log('Boa noite!');
} else {
    console.log('Valor inválido!');
}