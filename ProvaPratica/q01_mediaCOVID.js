const input = require('prompt-sync')();

function main() {
    var media_de_casos_14_dias = Number(input('Informe a média de casos há 14 dias: ')); //recebe o valor dos casos nos ultimos 14 dias
    var media_de_casos_hoje = Number(input('Informe a média de casos hoje: ')); //recebe o valor nos casos de hoje
    var variacao = media_de_casos_14_dias - media_de_casos_hoje; // faz a diferença dos casos dos ultimos 14 dias com os casos de hoje
    var variacao_em_porcentagem = (variacao * 100)/(media_de_casos_14_dias + media_de_casos_hoje); // faz a porcentagem da variação pelo valor total de casos(casos ha 14 dias + casos de hoje), se a variação for negativa = porcentagem negativa, se positiva = porcentagem positiva

    calcular_variacao(variacao_em_porcentagem); 
}

function calcular_variacao(v) { // função para calcular se a porcentagem da variação esta em alta, queda ou estavel
    if (v < 15 && v > 0) {
        console.log('Em estabilidade');
    } else if(v > 15) {
        console.log('Em alta');
    } else {
        console.log('Em queda');
    }
}

main();