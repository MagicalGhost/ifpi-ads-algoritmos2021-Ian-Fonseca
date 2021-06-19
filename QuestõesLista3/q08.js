const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));
    let limiteInferior = Number(input('informe o Limite Inferior: '));
    let limiteSuperior = Number(input('Informe o Limite Superior: '));

    multiplicacao(n, limiteSuperior, limiteInferior);
}

function multiplicacao(n, ls, li) {
    console.log(`Multiplos de ${n}`);
    for (let i = li; i < ls; i++) {
        if (i%n == 0) {
            console.log(i);
        }
    }
}

main();