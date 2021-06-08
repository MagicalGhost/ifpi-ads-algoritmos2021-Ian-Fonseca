const input = require('prompt-sync')();

function main() {
    var leitura_atual = Number(input('Informe a leitura atual: ')); //recebe o ultimo valor do mes
    var leitura_anterior = Number(input('informe a leitura anterior: ')); //recebe o valor do mes anterior
    var kwh = leitura_atual - leitura_anterior; // calcula quanto usou no mes atual em kwh

    calculo_energia_eletrica(kwh); 
}

function calculo_energia_eletrica(kwh) { // função pra fazer o talão, calcula todos os impostos, a taxa, e imprime o talão respeitando as regras de condições
    var divida = 0; // calcula quanto vai pagar por cada kwh
    var icms = 0; // imposto ICMS
    var pis = 0; // imposto PIS/CONFIS
    var taxa_iluminacao = 0; // calcula a taxa de iluminação
    var bandeira = 0; // calcula quanto vai pagar por cada 100kwh consumido de acordo com a bandeira, no caso da questao: vermelha R$ 8.00
    var total = divida + icms + pis + taxa_iluminacao + bandeira; // calcula o total a se pagar, ou seja, a soma de todos os impostos, taxas e o valor de cada kwh
    if (kwh <= 30) {
        console.log(`Consumo: ${kwh} KWh\nValor faturado: R$ ${total}\nBandeira R$ ${bandeira} (${bandeira/8} bandeiras)\nICMS R$ ${icms}\nPIS/CONFIS R$ ${pis}\nTaxa iluminação: ${taxa_iluminacao}`);
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
        total = divida + icms + pis + taxa_iluminacao + bandeira;
        console.log(`Consumo: ${kwh} KWh\nValor faturado: R$ ${total}\nBandeira R$ ${bandeira} (${bandeira/8} bandeiras)\nICMS R$ ${icms}\nPIS/CONFIS R$ ${pis}\nTaxa iluminação: ${taxa_iluminacao}`);
    } else {
        divida = kwh * 0.75;
        icms = divida * 0.25;
        pis = divida * 0.15;
        taxa_iluminacao = divida * 0.6;
        bandeira = (kwh - kwh%100)/100 * 8;
        total = divida + icms + pis + taxa_iluminacao + bandeira;
        console.log(`Consumo: ${kwh} KWh\nValor faturado: R$ ${total}\nBandeira R$ ${bandeira} (${bandeira/8} bandeiras)\nICMS R$ ${icms}\nPIS/CONFIS R$ ${pis}\nTaxa iluminação: ${taxa_iluminacao}`);
    }
}


main();