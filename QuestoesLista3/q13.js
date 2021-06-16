const input = require('prompt-sync')();

function main() {
    var salario = Number(input('Informe o salário: '));

    reajustesalario(salario);
}

function reajustesalario(s) {
    var ns = 0;      // NOVO SALARIO
    var ssa = 0;     // SOMA DOS SALARIOS ATUAIS
    var ssr = 0;     // SOMA DOS SALARIOS REAJUSTADOS
    
    while(s != 0) {
        if (s >= 0 && s <= 2999.99) {
            ns = s + s * 0.25;
        } else if(s >= 3000 && s <= 5999.99) {
            ns = s + s * 0.2;
        } else if(s >= 6000 && s <= 9999.99) {
            ns = s + s * 0.15;
        } else if(s >= 10000) {
            ns = s + s * 0.1;
        } else {
            console.log('Salário informado inválido!')
        }
        ssa += s;
        ssr += ns;
        console.log(`Novo salário: ${ns}\n`);
        s = Number(input('Informe outro salário: '));
    }
    var ds = ssr - ssa; // DIFERENÇA ENTRE AS DUAS SOMAS

    console.log(`\n**************************************\nSoma dos salários atuais: ${ssa}\nSoma dos salários reajustados: ${ssr}\nDiferença entre as duas somas: ${ds}`)
}

main();