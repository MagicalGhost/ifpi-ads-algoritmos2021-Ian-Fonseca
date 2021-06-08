const input = require('prompt-sync')();

function idade(dia_atual, mes_atual, ano_atual, dia, mes, ano) {
    idad = ano_atual - ano;
    if (mes > mes_atual) {
        idad--;
        console.log(idad);
    } else if(mes == mes_atual){
        if (dia > dia_atual) {
            idad--;
            console.log(idad);
        } else {
            console.log(idad);
        }
    } else {
        console.log(idad);
    }
}

function main() {
    var diaa = Number(input('Informe o dia atual: '));
    var mesa = Number(input('Informe o mes atual: '));
    var anoa = Number(input('Informe o ano atual: '));
    var dian = Number(input('Informe o dia de nascimento: '));
    var mesn = Number(input('Informe o mes de nascimento: '));
    var anon = Number(input('Informe o ano de nascimento: '));

    idade(diaa, mesa, anoa, dian, mesn, anon);
}

main();