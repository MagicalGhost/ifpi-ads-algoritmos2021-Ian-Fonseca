const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe o valor de N: '));
    let a = Array(n);
    let b = Array(n);
    let c = Array(2 * n);
    let j = 0;
    
    for (let i = 0; i < a.length; i++) {
        a[i] = input('Informe um valor para A: ');
        b[i] = input('Informe um valor para B: ');
    }

    for (let i = 0; i < c.length; i++) {
        c[i] = a[i]
    }

    for (let i = n; i < c.length; i++) {
        c[i] = b[j];
        j++;
    }

    for (let i = 0; i < c.length; i++) {
        console.log(c[i]);
    }
}

main();