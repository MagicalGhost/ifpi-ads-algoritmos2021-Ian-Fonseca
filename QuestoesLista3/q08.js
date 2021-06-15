const input = require('prompt-sync')();

function main() {
    var x = Number(input('Informe um valor para X: '));

    lista(x);
}

function lista(x) {
    var x1 = Number(input('Informe um outro valor: '));
    var x2 = Number(input('Informe um outro valor: '));
    var soma = x1 + x2;
    while(soma != x) {
        console.log('***************************************************')
        x1 = Number(input('Informe um outro valor: '));
        x2 = Number(input('Informe um outro valor: '));
        soma = x1 + x2;
    }
    console.log('A soma dos números digitados é igual a X');
}

main();