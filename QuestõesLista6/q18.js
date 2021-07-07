const { newArray } = require('./array_utils')

const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe a ordem da matriz: '));
    let matriz = newArray(n, n);

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = Number(input(`Informe um valor para Matriz[${i}][${j}]: `));
        }
    }

    console.table(matriz);
    console.log(`Soma dos positivos: ${somaPosiNega(matriz)[0]}\nSoma dos negativos: ${somaPosiNega(matriz)[1]}`);
}

function somaPosiNega(m) {
    let soma = [0, 0];

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (m[i][j] >= 0) {
                soma[0] += m[i][j];
            } else {
                soma[1] += m[i][j];
            }
        }
    }

    return soma;
}

main();