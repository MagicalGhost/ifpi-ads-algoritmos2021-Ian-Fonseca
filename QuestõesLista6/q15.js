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

    console.log(`A matriz informada é simétrica?\n${simetrica(matriz)}`);
}

function simetrica(m) {
    let retorno = 1;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (m[i][j] == m[j][i]) {
                retorno *= 1;
            } else {
                retorno *= 0;
            }
        }
    }

    if (retorno == 1) {
        return true;
    } else {
        return false;
    }
}

main();