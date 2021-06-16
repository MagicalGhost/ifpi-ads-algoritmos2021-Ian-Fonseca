const input = require('prompt-sync')();

function main() {
    let numero = String(input('Informe um valor: '));
    console.log(numero.length);
}

main();