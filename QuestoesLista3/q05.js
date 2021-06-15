const input = require('prompt-sync')();

function main() {
    var x = Number(input('Informe um valor para X: '));
    var n = Number(input('Informe um valor para N: '));

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