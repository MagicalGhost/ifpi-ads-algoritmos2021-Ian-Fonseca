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

    let maiorN = maior(matriz);
    let menorN = menor(matriz);
    console.log(`Maior número: ${maiorN[0]}\nLinha: ${maiorN[1]}, coluna: ${maiorN[2]}\n\nMenor número: ${menorN[0]}\nLinha: ${menorN[1]}, coluna: ${menorN[2]}`);
}

function maior(m) {
    let retorno = [-10000000000000000000, -1, -1];

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (m[i][j] >= retorno[0]) {
                retorno[0] = m[i][j];
                retorno[1] = i;
                retorno[2] = j;
            }
        }
    }
    return retorno;
}

function menor(m) {
    let retorno = [10000000000000000000, -1, -1];

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (m[i][j] <= retorno[0]) {
                retorno[0] = m[i][j];
                retorno[1] = i;
                retorno[2] = j;
            }
        }
    }
    return retorno;
}

main();