const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe o valor de N: '));

    numerosn(n);
}

function numerosn(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

main();