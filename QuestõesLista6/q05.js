const input = require('prompt-sync')()

function main() {
    let a = Array(20);
    let s = 0;

    for (let i = 0; i < a.length; i++) {
        a[i] = Number(input(`Informe um valor para A[${i}]: `));
    }

    for (let i = 0; i < (a.length/2); i++) {
        s += Math.pow((a[i] - a[(a.length - 1) - i]) , 2);
    }

    console.log(`S = ${s}`);
}

main();