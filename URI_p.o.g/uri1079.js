const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe o número de casos de teste: '));

    media_ponderada(n);
}

function media_ponderada(n) {
    let v1 = 0;
    let v2 = 0;
    let v3 = 0;
    let mediap = 0;

    for (let i = 0; i < n; i++) {
        v1 = Number(input('Informe o primeiro valor: '));
        v2 = Number(input('Informe o segundo valor: '));
        v3 = Number(input('Informe o terceiro valor: '));
        mediap = (2 * v1 + 3 * v2 + 5 * v3)/(2 + 3 + 5);
        console.log(`Média ponderada ${i + 1} = ${mediap.toFixed(1)}`);
    }
}

main();