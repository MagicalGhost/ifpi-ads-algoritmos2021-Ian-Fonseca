const input = require('prompt-sync')();

function main() {
    let texto = String(input('Texto: '));

    while(texto.length > 20) {
        texto = String(input('Texto: '));
    }

    console.log(`Texto na diagonal:\n${diagonal(texto)}`);
}

function diagonal(t) {
    let retorno = '';
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < i; j++) {
            retorno += ' ';
        }
        retorno += t[i] + '\n';
    }
    return retorno;
}

main();