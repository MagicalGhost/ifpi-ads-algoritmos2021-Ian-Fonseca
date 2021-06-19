const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));

    somafracao(n);
}

function somafracao(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += 1/i;
    }
    console.log(s);
}

main();