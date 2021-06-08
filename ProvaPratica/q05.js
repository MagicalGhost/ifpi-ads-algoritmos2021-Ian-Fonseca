const input = require('prompt-sync')();

function main() {
    var crit_a = Number(input('Informe um valor para o criterio a de 0 a 100: '))
    var crit_b = Number(input('Informe um valor para o criterio b de 0 a 100: '))
    var crit_c = Number(input('Informe um valor para o criterio c de 0 a 100: '))
    
    score1(crit_a, crit_b, crit_c);
    score2(crit_a, crit_b, crit_c);
}

function score1(ca, cb, cc) {
    var valor_em_ca = ca * 2.6;
    var valor_em_cb = cb * 5.7;
    var valor_em_cc = cc * 1.7;
    var soma = valor_em_ca + valor_em_cb + valor_em_cc;
    console.log('Score antigo: ');
    if (soma >= 0 && soma <400) {
        console.log('Baixo');
    } else if(soma >= 400 && soma < 600) {
        console.log('Regular');
    } else if(soma >= 600 && soma < 800) {
        console.log('Bom');
    } else {
        console.log('Muito bom');
    }
}

function score2(ca, cb, cc) {
    var valor_em_ca = ca * 6.2;
    var valor_em_cb = cb * 1.9;
    var valor_em_cc = cc * 1.9;
    var soma = valor_em_ca + valor_em_cb + valor_em_cc;
    console.log('Score novo: ');
    if (soma >= 0 && soma <= 300) {
        console.log('Baixo');
    } else if(soma > 300 && soma <= 500) {
        console.log('Regular');
    } else if(soma > 500 && soma <= 700) {
        console.log('Bom');
    } else {
        console.log('Muito bom');
    }
}

main();