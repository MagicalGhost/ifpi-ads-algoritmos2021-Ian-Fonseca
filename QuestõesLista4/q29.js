const input = require('prompt-sync')(); // INCOMPLETA

function main() {
    let invest = Number(input('Informe quanto será investido por mês: '));
    let taxajm = Number(input('Informe qual será a taxa de juros mensal(%): '));

    investimento(invest, taxajm);
}

function investimento(i, t) {
    let cont = "s";
    let jc = 0;
    while(cont == "s") {
        jc = i * Math.pow((1 + t), 12);
        console.log(`Investimento após 1 ano: ${i * 12 + jc}`);
        cont = String(input('Deseja processar mais um ano? (s/n): '));
    }
}

main();