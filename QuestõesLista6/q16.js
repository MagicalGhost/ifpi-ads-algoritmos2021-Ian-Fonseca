const { newArray } = require('./array_utils')

const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe a ordem da matriz: '));
    let id = identidade(n);

    console.table(id);
}

function identidade(n) {
    let retorno = newArray(n, n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                retorno[i][j] = 1;
            } else {
                retorno[i][j] = 0;
            }
        }
    }
    return retorno;
}

main();