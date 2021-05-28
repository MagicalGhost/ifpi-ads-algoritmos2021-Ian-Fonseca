const input = require('prompt-sync')(); //na medida do possivel...

function idade(dia_atual, mes_atual, ano_atual, dia, mes, ano) {
    var idad = ano_atual - ano;
    var mesv = mes + mes_atual;
    var diasv = dia + dia_atual;
    if (mes > mes_atual) {
        idad--;
        mesv--;
        console.log('anos: ', idad, 'meses: ', mesv, 'dias: ', dia_atual);
    } else if(mes == mes_atual){
        if (dia > dia_atual) {
            idad--;
            mesv--;
            console.log('anos: ', idad, 'meses: ', mesv, 'dias: ', diasv);
        } else {
            diasv = dia_atual - dia;
            mesv = 0;
            console.log('anos: ', idad, 'mes: ', mesv, 'dias: ', diasv);
        }
    } else {
        console.log('anos: ', idad, 'meses: ', (mes_atual - mes));
    }
}

var diaa = Number(input('Informe o dia atual: '));
var mesa = Number(input('Informe o mes atual: '));
var anoa = Number(input('Informe o ano atual: '));
var dian = Number(input('Informe o dia de nascimento: '));
var mesn = Number(input('Informe o mes de nascimento: '));
var anon = Number(input('Informe o ano de nascimento: '));

idade(diaa, mesa, anoa, dian, mesn, anon);