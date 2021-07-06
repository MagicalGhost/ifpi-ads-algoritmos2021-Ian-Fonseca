const input = require('prompt-sync')();

function main() {
    let nome = String(input('Texto: '));

    console.log(`Texto na vertical:\n${vertical(nome)}`);
}

function vertical(n) {
    let retorno = '';
    for (let i = 0; i < n.length; i++) {
        retorno += n[i] +'\n';
    }
    return retorno;
}

main();