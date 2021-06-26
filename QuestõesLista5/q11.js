const input = require('prompt-sync')();

function main() {
    let texto = input('Escreve seu texto aqui: ');

    console.log(`Tamanho do texto: ${texto.length} caracteres`);
}

main();