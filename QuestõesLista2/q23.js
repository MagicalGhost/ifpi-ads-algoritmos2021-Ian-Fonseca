const input = require('prompt-sync')();

function maisrecente() {
    if (ano1 > ano2) {
        console.log('Primeira data informada é a mais recente');
    } else if(ano2 > ano1) {
        console.log('Segunda data informada é a mais recente');
    } else {
        if (mes1 > mes2) {
            console.log('Primeira data informada é a mais recente');
        } else if(mes2 > mes1) {
            console.log('Segunda data informada é a mais recente');
        } else {
            if (dia1 > dia2) {
                console.log('Primeira data informada é a mais recente');
            } else if(dia2 > dia1) {
                console.log('Segunda data informada é a mais recente');
            } else {
                console.log('Datas iguais');
            }
        }
    }
}

var dia1 = Number(input('Informe o dia da primeira data: '));
var mes1 = Number(input('Informe o mes da primeira data: '));
var ano1 = Number(input('Informe o ano da primeira data: '));
var dia2 = Number(input('Informe o dia da segunda data: '));
var mes2 = Number(input('Informe o mes da segunda data: '));
var ano2 = Number(input('Informe o ano da segunda data: '));
maisrecente(dia1, mes1, ano1, dia2, mes2, ano2);