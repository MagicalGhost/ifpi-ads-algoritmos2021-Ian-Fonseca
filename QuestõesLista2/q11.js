const input = require('prompt-sync')();

var opcao = Number(input('Informe uma opção(1, 2 ou 3): '));
var num1 = Number(input('Informe o primeiro valor: '));
var num2 = Number(input('Informe o segundo valor: '));
var num3 = Number(input('Informe o terceiro valor: '));

if (opcao < 1 || opcao > 3) {
    console.log('Opção informada invalida: ');
} else {
    if (opcao == 1) {
        console.log(num1);
    } else if(opcao == 2) {
        console.log(num2);
    } else if(opcao == 3) {
        console.log(num3)
    }
}