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

    let matriz_transposta = transposta(matriz);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(matriz_transposta[i][j]);
        }
    }
}

function transposta(m) {
    let retorno = newArray(m.length, m.length);

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            retorno[j][i] = m[i][j];
        }
    }
    
    return retorno;
}

main();