const input = require('prompt-sync')();

function main() {
    let num1 = Number(input('Informe o primeiro número: '));
    let num2 = Number(input('Informe o segundo número: '));

    let aux = mmc(num1, num2);
    console.log((num1 * num2)/aux);
}

function mmc(x, y) {
    let resto;

    while(resto != 0){
        resto = x%y;
        x = y;
        y = resto;
    }
    return x;
}

main();