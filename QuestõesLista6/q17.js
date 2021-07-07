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
    console.log(`Maior soma na linha: ${maiorSoma(matriz)[0]}, soma = ${maiorSoma(matriz)[1]}\nMenor soma na linha: ${menorSoma(matriz)[0]}, soma = ${menorSoma(matriz)[1]}`);
}

function maiorSoma(m) {
    let lin_som = [0, -100000000000000000000000000000];
    let aux = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            aux += m[i][j];
        }
        if (aux >= lin_som[1]) {
            lin_som[1] = aux;
            lin_som[0] = i;
        }
        aux = 0;
    }

    return lin_som;
}

function menorSoma(m) {
    let lin_som = [0, 1000000000000000000000000000000];
    let aux = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            aux += m[i][j];
        }
        if (aux <= lin_som[1]) {
            lin_som[1] = aux;
            lin_som[0] = i;
        }
        aux = 0;
    }
    
    return lin_som;
}

main();