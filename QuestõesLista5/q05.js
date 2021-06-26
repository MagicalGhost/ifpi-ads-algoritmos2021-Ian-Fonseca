const input = require('prompt-sync')();

function main() {
    let data = input('Informe uma data (DD/MM/AAAA): ');

    console.log(nova_data(data));
}

function nova_data(d) {
    let r = d[0] + d[1];
    if ((d[3] + d[4]) == '01') {
        r += ' de Janeiro de ';
    } else if((d[3] + d[4]) == '02') {
        r += ' de Fevereiro de ';
    } else if((d[3] + d[4]) == '03') {
        r += ' de Março de ';
    } else if((d[3] + d[4]) == '04') {
        r += ' de Abril de ';
    } else if((d[3] + d[4]) == '05') {
        r += ' de Maio de ';
    } else if((d[3] + d[4]) == '06') {
        r += ' de Junho de ';
    } else if((d[3] + d[4]) == '07') {
        r += ' de Julho de ';
    } else if((d[3] + d[4]) == '08') {
        r += ' de Agosto de ';
    } else if((d[3] + d[4]) == '09') {
        r += ' de Setembro de ';
    } else if((d[3] + d[4]) == '10') {
        r += ' de Outubro de ';
    } else if((d[3] + d[4]) == '11') {
        r += ' de Novembro de ';
    } else if((d[3] + d[4]) == '12') {
        r += ' de Dezembro de ';
    }
    r += d[6] + d[7] + d[8] + d[9];
    return r;
}

main();