const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe um valor para N: '));
    let vetor = Array(n);

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Number(input(`Informe um valor para Vetor[${i}]: `));
    }

    vetor.sort();
    
    console.log('Vetor reordenado em ordem crescente:');

    for (let i = 0; i < vetor.length; i++) {
        console.log(`Vetor[${i}] = ${vetor[i]}`);
    }
    
}

main();