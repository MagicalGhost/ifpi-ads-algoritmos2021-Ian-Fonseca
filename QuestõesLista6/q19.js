const { newArray } = require('./array_utils')

const input = require('prompt-sync')()

function main() {
    let matriz = newArray(6, 6);

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = 1;
            if ((i >= 1 && i <= 4) && (j >= 1 && j <= 4)) {
                matriz[i][j] = 2;
            }
            if ((i >= 2 && i <= 3) && (j >= 2 && j <= 3)) {
                matriz[i][j] = 3;
            }
        }
    }
    console.table(matriz);
}

main();