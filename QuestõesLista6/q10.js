const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe um valor para N: '));
    let fibonacci = Array(n);
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (let i = 2; i < fibonacci.length; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    for (let i = 0; i < fibonacci.length; i++) {
        console.log(fibonacci[i]);
    }
}

main();