const input = require('prompt-sync')();

function main() {
    var numero = String(input('Informe um valor: '));
    console.log(numero.length);
}

main();