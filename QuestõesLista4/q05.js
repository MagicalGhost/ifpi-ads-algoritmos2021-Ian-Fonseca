const input = require('prompt-sync')();

function main() {
    let x = Number(input('Informe um valor para X: '));
    let n = Number(input('Informe um valor para N: '));

    divisao(x, n);
}

function divisao(x, n) {
    while(n > 2) {
        x = x/n;
        n--;
        console.log(x);
    }
}

main();