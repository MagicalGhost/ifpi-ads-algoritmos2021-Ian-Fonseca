const input = require('prompt-sync')();

function compara(num1){
    var alg_dez = (num1 - (num1%10))/10;
    var alg_uni = num1%10;
    if (alg_dez == alg_uni) {
        console.log('Algarismo da dezena igual ao algarismo da unidade!');
    } else {
        console.log('Algarismo da dezena diferente do algarismo da unidade!');
    }
}

function main() {
    var num1 = Number(input('Informe um número de dois digitos: '));
    compara(num1);
}

main();