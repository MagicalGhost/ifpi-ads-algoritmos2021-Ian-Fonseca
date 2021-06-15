const input = require('prompt-sync')();

function main() {
    var num1 = Number(input('Informe o primeiro número: '));
    var num2 = Number(input('Informe o segundo número: '));

    var aux = mmc(num1, num2);
    console.log((num1 * num2)/aux);
}

function mmc(x, y) {
    var resto;

    while(resto != 0){
        resto = x%y;
        x = y;
        y = resto;
    }
    return x;
}

main();