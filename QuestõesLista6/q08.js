const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe um valor para N: '));
    let vetor = Array(n);

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Number(input(`Informe um valor para Vetor[${i}]: `));
    }

    maior(vetor);
    menor(vetor);
}

function maior(v) {
    let m = -100000000000000000000000000;
    let p = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i] > m) {
            m = v[i];
            p = i;
        }
    }
    console.log(`Maior elemento: ${m} => posição: ${p}`);
}

function menor(v) {
    let m = 10000000000000000000000000000;
    let p = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i] < m) {
            m = v[i];
            p = i;
        }
    }
    console.log(`Menor elemento: ${m} => posição: ${p}`);
}

main();