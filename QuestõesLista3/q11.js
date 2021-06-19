const input = require('prompt-sync')();

function main() {
    let limiteInferior = Number(input('Informe o Limite Inferior: '));
    let limiteSuperior = Number(input('Informe o Limite Superior: '));

    primo(limiteInferior, limiteSuperior);
}

function primo(li, ls) {
    for (let i = li; i < ls; i++) {
        if (i == 1) {
            i++;
        }
        if (i == 2 || i == 3 || i == 5 || i == 7) {
            console.log(`Número ${i} é primo!`);
        } else if((i%2 != 0) && (i%3 != 0) && (i%5 != 0) && (i%7 != 0)) {
            console.log(`Número ${i} é primo!`);
        }
    }
}

main();