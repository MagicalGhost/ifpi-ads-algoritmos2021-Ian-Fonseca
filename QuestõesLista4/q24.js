const input = require('prompt-sync')();

function main() {
    let razao = Number(input('Informe a razão da PG: '));
    let a1 = Number(input('Informe o primeiro termo da PG: '));
    let n = Number(input('Informe A(n): '));

    pa(razao, a1, n);
}

function pa(r, a1, n) {
    let i = a1;
    let termospa = 0;
    while(i <= n) {
        termospa = a1 + (i - 1) * r;
        console.log(`Termo(${i}): ${termospa}`);
        i++;
    }
}

main();