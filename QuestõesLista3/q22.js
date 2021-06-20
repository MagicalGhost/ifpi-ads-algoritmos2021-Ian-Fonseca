const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe quantos gados serão revistados: '));
    let id = Number(input('Informe a identificação do gado: '));
    let peso = Number(input('Informe o peso do gado: '));
    
    frigorifico(id, peso, n);
}

function frigorifico(id, p, n) {
    let gordo = 0;
    let idgordo = 0;
    let magro = 10000000000;
    let idmagro = 0;

    for(let i = 0; i < n; i++) {
        if (i > 0) {
            id = Number(input('Informe a identificação do gado: '));
            p = Number(input('Informe o peso do gado: '));
        }

        if (p > gordo) {
            gordo = p;
            idgordo = id;
        }
        if(p < magro) {
            magro = p;
            idmagro = id;
        }
    }
    console.log(`\nBoi mais gordo:\nID - ${idgordo}\nPeso - ${gordo}kg\n=================================\nBoi mais magro:\nID - ${idmagro}\nPeso - ${magro}kg`);
}

main();