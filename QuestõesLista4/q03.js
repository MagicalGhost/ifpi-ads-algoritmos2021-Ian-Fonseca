const input = require('prompt-sync')();

function main() {
    let num1 = Number(input('Informe o primeiro número: '));
    let num2 = Number(input('Informe o segundo número: '));

    mdc(num1, num2);
}

function mdc(n1, n2) {
    let i = 2;
    let xmdc = 1;
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