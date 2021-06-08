const input = require('prompt-sync')();

function main() {
    var media_de_casos_14_dias = Number(input('Informe a média de casos há 14 dias: '));
    var media_de_casos_hoje = Number(input('Informe a média de casos hoje: '));
    var variacao = media_de_casos_14_dias - media_de_casos_hoje;
    var porcentagem = ((100 * variacao)/media_de_casos_14_dias);

    calcular_variacao(variacao, porcentagem, media_de_casos_14_dias, media_de_casos_hoje);
}

function calcular_variacao(variacao, pctg, m14, mh) {
    /*if (variacao < (0.15 * m14)) {
        console.log('Em estabilidade');
    } else if(variacao > (0.15 * m14)) {
        console.log('Em baixa');
    } else {
        console.log('Em alta');
    }*/

    if (mh < (0.15 * m14)) {
        console.log('Em estabilidade');
    } else if(mh > (0.15 * m14)) {
        console.log('Em alta');
    } else {
        console.log('Em baixa');
    }
}

main();