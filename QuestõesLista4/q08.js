const input = require('prompt-sync')();

function main() {
    let x = Number(input('Informe um valor para X: '));

    lista(x);
}

function lista(x) {
    let x1 = Number(input('Informe um outro valor: '));
    let x2 = Number(input('Informe um outro valor: '));
    let soma = x1 + x2;
    while(soma != x) {
        console.log('***************************************************')
        x1 = Number(input('Informe um outro valor: '));
        x2 = Number(input('Informe um outro valor: '));
        soma = x1 + x2;
    }
    console.log('A soma dos números digitados é igual a X');
}

main();