const input = require('prompt-sync')();

function main() {
    var numero = Number(input('Informe um valor: '));

    lista(numero);
}

function lista(num) {
    var aux = Number(input('Informe outro número: '));
    while(aux != num) {
        aux = Number(input('Informe outro número: '));
    }
    console.log('Número digitado igual ao número original!');
}

main();