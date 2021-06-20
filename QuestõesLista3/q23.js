const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe quantos funcionarios serão entrevistados: '));
    let cod = Number(input('Informe o código do funcionario: '));
    let horasTrabalhadas = Number(input('Informe a quantidade de horas trabalhadas: '));
    let dependentes = Number(input('Informe o número de dependentes: '));

    salariol(cod, horasTrabalhadas, dependentes, n);
}

function salariol(c, ht, d, n) {
    let sal = 0;
    let inss = 0;
    let ir = 0;
    let sall = 0;
    for(let i = 0; i < n; i++) {
        if (i > 0) {
            c = Number(input('Informe o código do funcionario: '));
            ht = Number(input('Informe a quantidade de horas trabalhadas: '));
            d = Number(input('Informe o número de dependentes: '));
        }

        sal = (12 * ht) + (40 * d);
        inss = sal * 0.085;
        ir = sal * 0.05
        sall = sal - (inss + ir);

        console.log(`INSS: R$${inss}\nIR: R$${ir}\nSalário liquido: R$${sall}`);
    }
}

main();