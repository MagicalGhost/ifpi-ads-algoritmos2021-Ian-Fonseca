const { newArray } = require('./array_utils')

const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe a ordem da matriz: '));
    let matriz = newArray(n, n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matriz[i][j] = Number(input(`Matriz[${i}][${j}] = `));
        }
    }

    console.log(`Soma da diagonal principal: ${soma_diagonal_principal(matriz)}\nSoma diagonal secundaria: ${soma_diagonal_secundaria(matriz)}\nSoma dos elementos fora das diagonais: ${soma_nao_diagonal(matriz)}`);
}

function soma_diagonal_principal(m) {
    let soma = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (i == j) {
                soma += m[i][j];
            }
        }
    }

    return soma;
}

function soma_diagonal_secundaria(m) {
    let soma = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if ((i + j) == (m.length - 1)) {
                soma += m[i][j];
            }
        }
    }

    return soma;
}

function soma_nao_diagonal(m) {
    let soma = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (((i + j) != (m.length - 1)) && (i != j)) {
                soma += m[i][j];
            }
        }
    }

    return soma;
}

main();