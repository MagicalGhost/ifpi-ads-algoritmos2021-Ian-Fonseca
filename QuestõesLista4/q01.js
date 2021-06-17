const input = require('prompt-sync')();

function main() {
    let num = Number(input('Informe um número: '));
    let i = 0;

    while(num != 0) {
        divisores(num, i);
        num = Number(input('Informe um número: '));
    }
    
}

function divisores(num, i) {
    console.log(`Número lido: ${num}\nLista de divisores:`);

        if(num >= 0) {
            while(i <= num) {
                if(num%i == 0) {
                    console.log(i);
                }
                i++;
            }
        } else {
            console.log('Digite apenas valores positivos!');
        }
}

main();