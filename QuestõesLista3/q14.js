const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));

    quadrado(n);
}

function quadrado(n) {
    let mquad = 0;
    for (let i = 0; Math.pow(i, 2) <= n; i++) {
        mquad = i;
    }
    console.log(`Maior quadrado perfeito menor ou igual a ${n} é: ${mquad}`);
}

main()