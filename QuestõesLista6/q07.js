const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe um valor para N: '));
    let a = Array(n);
    let b = Array(n);
    
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(input(`Informe um valor para A[${i}]: `));
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i]%2 == 0) {
            b[i] = 0;
        } else {
            b[i] = 1;
        }
    }

    for (let i = 0; i < b.length; i++) {
        console.log(`B[${i}] = ${b[i]}`);
    }
}

main();