const input = require('prompt-sync')();

function main() {
    var nome = String(input('Informe o nome do vendedor: '));
    var valor_total_vendas_mes = Number(input('Informe o valor total de vendas no mês: '));
    var salario = 1100;

    calcular_comissao(valor_total_vendas_mes, salario);
}

function calcular_comissao(valor, s) {
    var comissao = 0; // inicializar a variavel que calcula a comissão
    var salario_final = comissao + s; // calcular o salario final
    var faixa = 0;
    if (valor <= 5000) {
        console.log(`Valor de comissão: 0% Faixa: ${faixa}\nGanhos com comissão: ${comissao}\nSalário final: ${salario_final}`); // se a comissão estiver menor que 5k então a comissão será de 0% sobre a faixa de 0
    } else if(valor > 5000 && valor <= 10000) {
        faixa = valor - 5000;
        comissao = faixa * 0.05;
        salario_final = comissao + s;
        console.log(`Valor de comissão: 5% Faixa: ${faixa}\nGanhos com comissão: ${comissao}\nSalário final: ${salario_final}`); // se a comissão estiver maior que 5k e menor que 10k então a comissão será de 5% sobre a faixa
    } else if(valor > 10000 && valor <= 30000) {
        faixa = valor - 10000;
        comissao = faixa * 0.1 + (valor - 5000 * 0.05);
        salario_final = comissao + s;
        console.log(`Valor de comissão: 10% Faixa: ${faixa}\nGanhos com comissão: ${comissao}\nSalário final: ${salario_final}`); // se a comissão estiver maior que 10k e menor que 30k então a comissão será de 10% sobre a faixa
    } else {
        comissao = valor * 0.2;
        salario_final = comissao + s;
        console.log(`Valor de comissão: 20% Faixa: ${valor}\nGanhos com comissão: ${comissao}\nSalário final: ${salario_final}`); // se a comissão estiver maior que 30k  então a comissão será de 20% sobre a venda
    }
}

main()