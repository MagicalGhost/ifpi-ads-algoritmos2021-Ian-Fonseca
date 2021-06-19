const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));

    soma(n);
}

function soma(n) {
    let somatorio = 0;
    for (let i = 0; i <= n; i++) {
        somatorio = somatorio + i;
    }
    console.log(`Soma de todos os números inteiros de 1 até N (incluidos 1 e N): ${somatorio}`);
}

main();