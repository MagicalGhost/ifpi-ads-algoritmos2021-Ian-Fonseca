const input = require('prompt-sync')();

function main() {
    let valor_emprestimo = Number(input('Informe o valor do empréstimo(R$: 40K; 60K; 81K): '));
    let valor_parcelas = Number(input('Informe o valor das parcelas(R$: 1000; 1200; 1500): '));
    let saldo = valor_emprestimo;
    let juros = 0;
    let novo_saldo = 0;

    while(saldo > 0) {
        juros = saldo * 0.01;
        novo_saldo = saldo - valor_parcelas + juros;
        if (novo_saldo < 0) {
            valor_parcelas = saldo;
            novo_saldo = 0;
        }
        console.log(`---------------Nota Fiscal----------------\nJuros do mês: R$ ${juros}\nParcela do mês: R$ ${valor_parcelas}\nSaldo anterior: R$ ${saldo}\nNovo Saldo: R$ ${novo_saldo}`);
        saldo = novo_saldo;
    }
}

main();