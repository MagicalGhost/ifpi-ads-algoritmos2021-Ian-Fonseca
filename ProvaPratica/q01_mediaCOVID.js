const input = require('prompt-sync')();

function main() {
    var media_de_casos_14_dias = Number(input('Informe a média de casos há 14 dias: '));
    var media_de_casos_hoje = Number(input('Informe a média de casos hoje: '));
    var variacao = media_de_casos_14_dias - media_de_casos_hoje;
    var porcentagem = ((100 * variacao)/(media_de_casos_14_dias + media_de_casos_hoje));

    calcular_variacao(porcentagem);
    console.log('Variação de: ', porcentagem, '%')
}

function calcular_variacao(pctg) {
    if (pctg < 15 && pctg > 0) {
        console.log('Em estabilidade');
    } else if(pctg > 15) {
        console.log('Em alta');
    } else {
        console.log('Em queda');
    }
}

main();