const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe o valor de N: '));
    let a = Array(n);
    let z = 0;
    
    for (let i = 0; i < a.length; i++) {
        a[i] = input('Informe um valor: ');
    }

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if ((i != j) && (a[i] == a[j])) {
                console.log(`Elementos iguais A[${i}]: ${a[i]}`);
            }
            
        }
    }
}

main();