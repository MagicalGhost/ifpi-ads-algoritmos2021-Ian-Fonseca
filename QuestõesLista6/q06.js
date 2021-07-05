const input = require('prompt-sync')()

function main() {
    let num = String(input('Informe um numero na base binaria: '));

    console.log(`Número informado em decimal: ${parseInt(num, 2)}`);
    console.log(`Número informado em hexadecimal: ${(parseInt(num, 2)).toString(16)}`);
}

main();