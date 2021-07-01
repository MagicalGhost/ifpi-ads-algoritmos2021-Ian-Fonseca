const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe um valor para N: '));

    divisores(n);
}

function divisores(n) {
    for (let i = 0; i < 10000; i++) {
        if (i%n == 2) {
            console.log(i);
        }
        
    }
}

main();