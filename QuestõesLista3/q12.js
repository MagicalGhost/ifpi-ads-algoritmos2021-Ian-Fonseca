const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));

    somamedia(n);
}

function somamedia(n) {
    let soma = 0;
    let media = 0;
    let valor = 0;
    for (let i = 1; i <= n; i++) {
        valor = Number(input(`Informe um número[${i}]: `));
        soma += valor;
        media = soma/i;
    }
    console.log(`Soma dos termos = ${soma}\nMédia = ${media}`);
}

main();