const input = require('prompt-sync')();

function main() {
    let idade = Number(input('Informe sua idade: '));
    console.log('1 - Ótimo\n2 - Bom\n3 - Regular\n4 - Péssimo')
    let opiniao = Number(input('Informe sua opinião sobre o filme: '));
    let i = 0;
    let somai = 0;
    let regular = 0;
    let bom = 0;
    let total = 0;

    while(idade != -1) {
        if (opiniao == 1) {
            somai = somai + idade;
            i++;
        } else if(opiniao == 3) {
            regular++;
        } else if(opiniao == 2) {
            bom++;
        }
        total++;
        idade = Number(input('Informe sua idade: '));
        opiniao = Number(input('Informe sua opinião sobre o filme: '));
    }
    console.log(`Média das idades das pessoas que responderam ótimo: ${somai/i}\nQuantidade de pessoas que responderam regular: ${regular}\nPercentual de pessoas que responderam bom: ${bom/total * 100}%`);
}

main();