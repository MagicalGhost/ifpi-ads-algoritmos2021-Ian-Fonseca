const input = require('prompt-sync')();

function main() {
    frigorifico();
}

function frigorifico() {
    var id = Number(input('Informe a identificação do gado: '));
    var peso = Number(input('Informe o peso do gado: '));
    var gordo = 0;
    var idgordo = 0;
    var magro = 10000000000;
    var idmagro = 0;

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