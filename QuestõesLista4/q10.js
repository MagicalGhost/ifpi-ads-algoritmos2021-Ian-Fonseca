const input = require('prompt-sync')();

function main() {
    let peso_aeronave = 500000;
    let peso_combustivel = Number(input('Informe a quantidade de combustivel(L): '));
    while(peso_combustivel < 10000) {
        console.log('Impossível decolar, quantidade mínima de combustivel de: 10.000L');
        peso_combustivel = Number(input('Informe a quantidade de combustivel(L): '));
    }
    peso_combustivel = peso_combustivel * 1.5;

    let containersn = Number(input('Informe o número de containers: ')); // NUMERO DE CONTAINERS
    let spc = somatoriopc(containersn);  // SOMATORIO DOS PESOS DOS CONTAINERS

    let bilhete = Number(input('Informe o bilhete do passageiro: '));
    let pesop = passageiro(bilhete);
    let pesototal = spc + peso_combustivel + pesop;

    console.log(`Peso da carga: ${spc} kg\nPeso combustivel: ${peso_combustivel}\nPeso total: ${pesototal}`);
    
    if (peso_aeronave >= pesototal) {
        console.log('Vôo liberado!');
    } else {
        console.log('Vôo negado!');
    }
}

function somatoriopc(cn) { // RETORNA O SOMATORIO DOS PESOS DOS CONTAINERS
    let containersp = 0;    // PESO DE CADA CONTAINER
    let pesoc = 0;    // SOMA DOS PESOS DOS CONTAINERS
    let i = 0;
    while(i < cn) {
        containersp = Number(input(`Informe o peso do container(${i + 1}) em kg: `));
        pesoc = pesoc + containersp;
        i++;
    }
    return pesoc;
}

function passageiro(b) {   // IMPRIME A QUANTIDADE DE PASSAGEIRO, A QUANTIDADE DE BAGAGENS E O PESO TOTAL
    let qtdb = Number(input('Informe a quantidade de bagagens do passageiro: '));   // QUANTIDADE DE BAGAGENS DO PASSAGEIRO
    let qtdp = 0;  // QUANTIDADE DE PASSAGEIROS
    let somatorioqb = 0;  // SOMATORIO DA QUANTIDADE DE BAGAGENS
    while(b != 0) {
        qtdp++;
        somatorioqb = somatorioqb + qtdb;
        b = Number(input('Informe o bilhete do passageiro: '));
        qtdb = Number(input('Informe a quantidade de bagagens do passageiro: '));
    }
    let pesop = (qtdp * 70) + (somatorioqb * 10);
    console.log(`Quantidade de passageiros: ${qtdp}\nVolume das bagagens: ${somatorioqb}\nPeso dos passageiros (somatório do peso de cada passageiro e de todos os volumes da sua bagagem;): ${pesop} kg`);
    return pesop;
}

main();