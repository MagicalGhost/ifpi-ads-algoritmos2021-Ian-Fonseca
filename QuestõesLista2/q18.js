const input = require('prompt-sync')();

function operacao(op, n1, n2) {
    if (op == 1) {
        console.log(n1 + n2);
    } else if(op == 2) {
        console.log(n1 - n2);
    } else if(op == 3) {
        console.log(n1 * n2);
    } else if(op == 4) {
        console.log(n1/n2);
    } else {
        console.log('Opção selecionada invalida!');
    }
}

var num1 = Number(input('Informe o primeiro valor: '));
var num2 = Number(input('Informe o segundo valor: '));
var opcao = Number(input('1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nEscolha uma operação: '));
operacao(opcao, num1, num2);