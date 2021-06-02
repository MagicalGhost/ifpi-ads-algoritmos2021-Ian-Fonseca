const input = require('prompt-sync')();

var letra = String(input('Escolha uma letra (M ou F): '));

if (letra == 'F') {
    console.log('Sexo feminino!');
} else if(letra == 'M') {
    console.log('Sexo masculino!');
} else {
    console.log('Sexo inválido!');
}