const input = require('prompt-sync')();

function main() {
    let sexo = 0;
    let idade = 0;
    let estcivil = 0;
    let i = 0;
    let totalf = 0;   // TOTAL DE MULHERES
    let totalm = 0;   // TOTAL DE HOMENS
    let somaif = 0;   // SOMA DAS IDADES DAS MULHERES
    let somaim = 0;   // SOMA DAS IDADES DOS HOMENS
    let soltf = 0;    // QUANTIDADE DE MULHERES SOLTEIRAS
    let soltm = 0;    // QUANTIDADE DE HOMENS SOLTEIROS
    let qtdmd30 = 0;  // QUANTIDADE DE MULHERES DIVORCIADAS ACIMA DE 30 ANOS

    while(i < 100) {
        sexo = Number(input('Informe o sexo(1 - Masculino; 2 - Feminino): '));
        idade = Number(input('Informe a idade: '));
        estcivil = Number(input('Informe seu estado civil(1-Casado; 2-Solteiro; 3-Divorciado; 4-Viuvo): '));
        if (sexo == 1) {
            somaim = somaim + idade;
            totalm++;
            if (estcivil == 2) {
                soltm++;
            }
        } else if(sexo == 2) {
            somaif = somaif + idade;
            totalf++;
            if (estcivil == 2) {
                soltf++;
            } else if(estcivil == 3 && idade > 30) {
                qtdmd30++;
            }
        } else {
            console.log('Valor informado invalido!');
        }
        i++;
    }
    console.log(`Média de idade dos homens: ${somaim/totalm}\nMédia de idade das mulheres: ${somaif/totalf}`);
    console.log(`Percentual de homens solteiros: ${soltm/totalm * 100}%\nPercentual de mulheres solteiras: ${soltf/totalf * 100}%`);
    console.log(`Quantidade de mulheres divorciadas acima dos 30 anos: ${qtdmd30}`);
}

main();