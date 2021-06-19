const input = require('prompt-sync')();

function main() {
    let num = Number(input('Informe um número: '));

    fatorial(num);
}

function fatorial(n) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat = fat * i;
    }
    console.log(`${n}! = ${fat}`);
}

main();