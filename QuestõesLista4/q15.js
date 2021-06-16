const input = require('prompt-sync')();

function main() {
    let valor = Number(input('Informe um valor entre 0 e 255: '));

    while(valor < 0 || valor > 255) {
        console.log('Valor invalido');
        valor = Number(input('Informe um valor entre 0 e 255: '));
    }

    console.log('Valor informado em binário: ', binario(valor));
    console.log('Valor informado em hexadecimal: ', hexa(valor));
}

function binario(dec){
    return (dec).toString(2);
}

function hexa(dec) {
    return (dec).toString(16);
}

main();