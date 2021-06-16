const input = require('prompt-sync')();

function main() {
    let numero = Number(input('Informe um número: '));

    divisao(numero);
}

function divisao(num) {
    while(num/2 >= 1) {
        num /= 2;
    }
    console.log(num);
}

main();