const { mediaValores, maiorValor, menorValor, qtddPositivos, qtddNegativos, repetidos } = require('./q6_utils');

const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe a ordem do vetor: '));
    let vetor = Array(n);

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Number(input(`Informe um valor para Vetor[${i}] = `));
    }

    console.log(`Média dos valores = ${mediaValores(vetor)}\nMaior valor = ${maiorValor(vetor)}\nMenor valor = ${menorValor(vetor)}\nQuantidade de valores positivos = ${qtddPositivos(vetor)}\nQuantidade de valores negativos = ${qtddNegativos(vetor)}\nHá valores repetidos? ${repetidos(vetor)}`);
}

main();