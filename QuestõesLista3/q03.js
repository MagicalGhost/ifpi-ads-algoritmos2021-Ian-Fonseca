const input = require('prompt-sync')();

function main() {
    let a0 = Number(input('Informe A(0): '));
    let limite = Number(input('Informe o limite: '));
    let r = Number(input('Informe a razão R: '));

    pa(a0, limite, r);
}

function pa(a, lm, r) {
    let termospa = 0;
    for (let i = a; i <= lm; i++) {
        termospa = a + (i - 1) * r;
        if (termospa < lm) {
            console.log(`Termo(${i}): ${termospa}`);
        }
    }
}

main();