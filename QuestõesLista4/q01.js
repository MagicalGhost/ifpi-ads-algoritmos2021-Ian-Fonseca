const input = require('prompt-sync')();

function main() {
    var num = Number(input('Informe um número: '));

    while(num != 0) {
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
        num = Number(input('Informe um número: '));
    }
    
}

main();