const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));

    maior(n);
}

function maior(n) {
    let maior = 0;
    let valor = 0;
    for (let i = 0; i < n; i++) {
        valor = Number(input(`Informe um valor[${i + 1}]: `));
        if (maior <= valor) {
            maior = valor;
        }
    }
    console.log(`Maior número = ${maior}`);
}

main();