const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe quantos habitantes serão entrevistados: '));
    let salario = Number(input('Informe o salário: '));
    let numero_de_filhos = Number(input('Informe o número de filhos: '));

    info(n, salario, numero_de_filhos);
}

function info(n, s, nf) {
    let somaS = 0;  // SOMA DOS SALARIOS
    let somanf = 0; // SOMA DOS FILHOS
    let smm = 0;    // SOMA DAS PESSOAS COM SALARIO DE ATE 1K
    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            s = Number(input('Informe o salário: '));
            nf = Number(input('Informe o número de filhos: '));
        }

        somaS += s;
        somanf += nf;
        if (s >=0 && s <= 1000) {
            smm++;
        }
    }
    console.log(`Média do salário da população: ${somaS/n}\nMédia do número de filhos: ${somanf/n}\nPercentual de pessoas com salário de ate R$ 1000,00: ${smm/n * 100}%`);
}

main();