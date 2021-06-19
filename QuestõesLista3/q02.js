const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe o valor de N: '));

    paresn(n);
}

function paresn(n) {
    for (let i = 1; i <= n; i++) {
        if (i%2 == 0) {
            console.log(i);
        }
    }
}

main();