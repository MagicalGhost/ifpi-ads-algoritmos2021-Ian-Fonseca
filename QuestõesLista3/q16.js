const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));
    for (; n < 2;) {
        n = Number(input('Informe um valor para N: '));
    }

    fibonacci(n);
}

function fibonacci(n) {
    let seqa = 0;   // SEQUENCIA ANTIGA
    let seqn = 1;   // SEQUENCIA NOVA
    let aux = 0;    // VARIAVEL AUXILIAR
    for (let i = 0; i < (n - 2); i++) {
        aux = seqa
        seqa = seqn;
        seqn = seqn + aux;

        if (i == 0 || i == 1) {
            console.log(i);
        }

        console.log(seqn);
    }
}

main();