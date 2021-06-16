const input = require('prompt-sync')();

function main() {
    funcao();
}

function funcao() {
    var j1 = 0;
    var j2 = 0;
    var p = 0;
    while((j1 < 21 || (j1 - j2) < 2) && (j2 < 21 || (j2 - j1) < 2)) {
        p = Number(input('Informe quem fez o ponto (1 ou 2): '));
        if (p == 1) {
            j1++;
        } else if(p == 2) {
            j2++;
        } else {
            console.log('Valor invalido!');
        }
    }

    while((j1 - j2) < 2 && (j2 - j1) < 2) {
        p = Number(input('Informe quem fez o ponto (1 ou 2): '));
        if (p == 1) {
            j1++;
        } else if(p == 2) {
            j2++;
        } else {
            console.log('Valor invalido!');
        }
    }

    if (j1 > j2) {
        console.log('Jogador 1 venceu');
    } else {
        console.log('Jogador 2 venceu');
    }
}

main();