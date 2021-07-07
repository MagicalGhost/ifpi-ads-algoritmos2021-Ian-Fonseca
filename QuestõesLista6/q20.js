const { newArray } = require('./array_utils')

const input = require('prompt-sync')()

function main() {
    let matriz = newArray(5, 5);
    let contador = 1;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = '';
            if (contador < 10) {
                matriz[i][j] += '0' + contador;
            } else {
                matriz[i][j] += contador;
            }
            contador++;
        }
    }
    console.table(matriz);
}

main();