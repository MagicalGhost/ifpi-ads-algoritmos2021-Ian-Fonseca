const input = require('prompt-sync')();

function main() {
    let n = Number(input('Informe quantos eleitores votarão: '));
    console.log('Eleições\nVote 1 para o candidato 1\nVote 2 para o candidato 2\nVote 3 para o candidato 3\nVote 9 para nulo\nVote 0 para voto em branco')

    eleicao(n);
}

function eleicao(n) {
    let voto = -1;
    let v0 = 0;
    let v1 = 0;
    let v2 = 0;
    let v3 = 0;
    let v9 = 0;

    for (let i = 0; i < n; i++) {
        voto = Number(input('Seu voto: '));
        if (voto == 0) {
            v0++;
        } else if(voto == 1) {
            v1++;
        } else if(voto == 2) {
            v2++;
        } else if(voto == 3) {
            v3++;
        } else if(voto == 9) {
            v9++;
        } else {
            console.log('Voto inválido');
        }
    }
    console.log(`Total de votos:\nCandidato 1: ${v1}\nCandidato 2: ${v2}\nCandidato 3: ${v3}\nVotos nulos: ${v9}\nVotos em branco: ${v0}`);
    if (v1 > v2 && v1 > v3) {
        console.log('Candidato 1 venceu a eleição!');
    } else if(v2 > v1 && v2 > v3) {
        console.log('Candidato 2 venceu a eleição!');
    } else if(v3 > v1 && v3 > v2) {
        console.log('Candidato 3 venceu a eleição!');
    } else {
        console.log('Ninguem venceu as eleições...');
    }
}

main();