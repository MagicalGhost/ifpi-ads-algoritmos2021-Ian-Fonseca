const input = require('prompt-sync')();

function main() {
    let limiteInferior = Number(input('informe o Limite Inferior: '));
    let limiteSuperior = Number(input('Informe o Limite Superior: '));

    pares(limiteSuperior, limiteInferior);
}

function pares(ls, li) {
    console.log(`Números pares entre ${li} e ${ls}`);
    for (let i = li; i < ls; i++) {
        if (i%2 == 0) {
            console.log(i);
        }
    }
}

main();