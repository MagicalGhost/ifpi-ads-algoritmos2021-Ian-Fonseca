const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));

    sequence(n);
}

function sequence(n) {
    let seq = 0;
    console.log(`Sequencia dos ${n} primeiros números: `);
    for (let i = 1; i <= n; i++) {
        seq = seq + i;
        console.log(seq);
    }
}

main();