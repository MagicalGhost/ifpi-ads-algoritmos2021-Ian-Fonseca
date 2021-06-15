const input = require('prompt-sync')();

function main() {
    var numero = Number(input('Informe um número: '));

    listaDivisores(numero);
}

function listaDivisores(num) {
    console.log(`Número lido: ${num}\nLista de divisores:`);

    if(num >= 0) {
        for (let i = 0; i <= num; i++) {
            if(num%i == 0) {
                console.log(i);
            }
        }
    } else {
        console.log('Digite apenas valores positivos!');
    }
}

main();