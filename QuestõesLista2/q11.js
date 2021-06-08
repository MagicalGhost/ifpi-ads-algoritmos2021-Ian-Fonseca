const input = require('prompt-sync')();

function main() {
    var opcao = Number(input('Informe uma opção(1, 2 ou 3): '));
    var num1 = Number(input('Informe o primeiro valor: '));
    var num2 = Number(input('Informe o segundo valor: '));
    var num3 = Number(input('Informe o terceiro valor: '));
    var retorno = Number(escolha(opcao, num1, num2, num3));
    console.log(`${retorno}`)
}

function escolha(opcao, num1, num2, num3) {
    if (opcao < 1 || opcao > 3) {
        console.log('Opção informada invalida: ');
    } else {
        if (opcao == 1) {
            return num1;
        } else if(opcao == 2) {
            return num2;
        } else if(opcao == 3) {
            return num3;
        }
    }
}

main();