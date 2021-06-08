const input = require('prompt-sync')();

function main() {
    var media_de_casos_14_dias = Number(input('Informe a média de casos há 14 dias: ')); //recebe o valor dos casos nos ultimos 14 dias
    var media_de_casos_hoje = Number(input('Informe a média de casos hoje: ')); //recebe o valor nos casos de hoje
    var variacao = (media_de_casos_hoje * 100)/media_de_casos_14_dias; // faz a porcentagem da variação, se a variação for negativa = porcentagem negativa, se positiva = porcentagem positiva
    
    calcular_variacao(media_de_casos_hoje, media_de_casos_14_dias, variacao);
}

function calcular_variacao(mh, m14, v) { // função para calcular se a porcentagem da variação esta em alta, queda ou estavel, recebe a media de hoje, dos 14 dias e a variação em porcentagem
    if (mh < m14) { // se a media de hoje for menor que a dos 14 dias entao
        v *= -1;    // a variação fica negativa
        if (v < -15) {
            console.log(`Em queda\nVariação em porcentagem: ${v}%`);
        } else {
            console.log(`Em estabilidade\nVariação em porcentagem: ${v}%`);
        }
    } else { // se a media de hoje for maior que a dos 14 dias entao
        v -= 100; // variação positiva entre 0 e 100
        if (v > 15) {
            console.log(`Em alta\nVariação em porcentagem: ${v}%`);
        } else {
            console.log(`Em estabilidade\nVariação em porcentagem: ${v}%`);
        }
    }
}

main();