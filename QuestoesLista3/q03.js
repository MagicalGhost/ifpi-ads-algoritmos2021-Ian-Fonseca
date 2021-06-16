const input = require('prompt-sync')();

function main() {
    var num1 = Number(input('Informe o primeiro número: '));
    var num2 = Number(input('Informe o segundo número: '));

    mdc(num1, num2);
}

function mdc(n1, n2) {
    var i = 2;
    var xmdc = 1;
    while(n1/i != 1 && n2/i != 1) {
        if (n1%i == 0 && n2%i == 0) {
            xmdc *= i;
            n1 = n1/i;
            n2 = n2/i;
        } else {
            i++;
        }
    }
    console.log(xmdc);
}

main();