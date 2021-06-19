const input = require('prompt-sync')();

function main() {
    let a0 = Number(input('Informe A(0): '));
    let limite = Number(input('Informe o limite: '));
    let r = Number(input('Informe a razão R: '));

    pg(a0, limite, r);
}

function pg(a, lm, r) {
    let termospg = 0;
    for (let i = a; i <= lm; i++) {
        termospg = a * Math.pow(r, (i - 1));
        if (termospg < lm) {
            console.log(`Termo(${i}): ${termospg}`);
        }
    }
}

main();