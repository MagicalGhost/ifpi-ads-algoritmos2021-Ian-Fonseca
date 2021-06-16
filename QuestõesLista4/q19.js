const input = require('prompt-sync')();

function main() {
    let id = Number(input('Informe a identificação do gado: '));
    let peso = Number(input('Informe o peso do gado: '));
    let gordo = 0;
    let idgordo = 0;
    let magro = 10000000000;
    let idmagro = 0;

    while(id != 0) {
        if (peso > gordo) {
            gordo = peso;
            idgordo = id;
        }
        if(peso < magro) {
            magro = peso;
            idmagro = id;
        }
        id = Number(input('Informe a identificação do gado: '));
        peso = Number(input('Informe o peso do gado: '));
    }
    console.log(`\nBoi mais gordo:\nID - ${idgordo}\nPeso - ${gordo}kg\n=================================\nBoi mais magro:\nID - ${idmagro}\nPeso - ${magro}kg`);
}

main();