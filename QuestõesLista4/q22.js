const input = require('prompt-sync')();

function main() {
    let num1 = Number(input('Informe um valor para dividir: '));
    let num2 = Number(input('Informe um divisor: '));

    divisao(num1, num2);
}

function divisao(n1, n2) {
    let aux = n1;
    let r = 0;
    let resto;
    while(aux != 0) { // rever
        if (aux >= n2) {
            aux = aux - n2;
            r++;
            resto = aux;
        } else {
            aux = aux - aux;
        }
    }
    console.log(`Quociente: ${r}\nResto: ${resto}`);
}

main();