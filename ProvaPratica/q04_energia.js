const input = require('prompt-sync')();

function main() {
    var leitura_atual = Number(input('Informe a leitura atual: '));
    var leitura_anterior = Number(input('informe a leitura anterior: '));
    var kwh = leitura_atual - leitura_anterior;

    calculo_energia_eletrica(kwh);
}

function calculo_energia_eletrica(kwh) {
    var divida = 0;
    var icms = 0;
    var pis = 0;
    var taxa_iluminacao = 0;
    var bandeira = 0;
    if (kwh <= 30) {
        console.log(`Consumo: ${kwh} KWh\nValor faturado: R$ ${divida + icms + pis + taxa_iluminacao + bandeira}\nBandeira R$ ${bandeira} (x bandeira)\nICMS R$ ${icms}\nPIS/CONFIS R$ ${pis}\nTaxa iluminação: ${taxa_iluminacao}`);
    } else if(kwh > 30 && kwh <= 100) {
        divida = kwh * 0.59;
        icms = divida * 0.25;
        pis = divida * 0.15;
        if (kwh > 80) {
            taxa_iluminacao = divida * 0.06;
        } else {
            taxa_iluminacao = 0;
        }
        if (kwh >= 100) {
            bandeira = (kwh - kwh%100)/100 * 8;
        }
        console.log(`Consumo: ${kwh} KWh\nValor faturado: R$ ${divida + icms + pis + taxa_iluminacao + bandeira}\nBandeira R$ ${bandeira} (x bandeira)\nICMS R$ ${icms}\nPIS/CONFIS R$ ${pis}\nTaxa iluminação: ${taxa_iluminacao}`);
    } else {
        divida = kwh * 0.75;
        icms = divida * 0.25;
        pis = divida * 0.15;
        taxa_iluminacao = divida * 0.6;
        bandeira = (kwh - kwh%100)/100 * 8;
        console.log(`Consumo: ${kwh} KWh\nValor faturado: R$ ${divida + icms + pis + taxa_iluminacao + bandeira}\nBandeira R$ ${bandeira} (x bandeira)\nICMS R$ ${icms}\nPIS/CONFIS R$ ${pis}\nTaxa iluminação: ${taxa_iluminacao}`);
    }
}


main();