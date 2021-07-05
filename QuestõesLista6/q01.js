const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe um valor para N: '));
    let a = Array(n);
    let b = Array(n);
    
    for (let i = 0; i < a.length; i++) {
        a[i] = input('Informe um valor: ');
        n--;
        b[n] = a[i];
    }

    for (let i = 0; i < a.length; i++) {
        console.log(a[i], ' ', b[i]);
        
    }
}

main();