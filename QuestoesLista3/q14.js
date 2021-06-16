const input = require('prompt-sync')();

function main() {
    console.log('CANDIDATOS:\n- Serra = 45\n- Dilma = 13\n- Ciro Gomes = 23\n- Para indeciso = 99\n- Para outros = 98\n- Para nulo/branco = 0\n');

    eleicao();
}

function eleicao() {
    var voto = 1;
    var serra = 0;
    var dilma = 0;
    var ciro = 0;
    var indeciso = 0;
    var outros = 0;
    var nulo = 0;
    var total = 0;
    while(voto != -1) {
        voto = Number(input('Em quem você votaria? '));
        if (voto == 45) {
            serra++;
        } else if(voto == 13) {
            dilma++;
        } else if(voto == 23) {
            ciro++;
        } else if(voto == 99) {
            indeciso++;
        } else if(voto == 98) {
            outros++;
        } else if(voto == 0) {
            nulo++;
        } else if(voto == -1) {
            console.log('Pesquisa encerrada!');
        } else {
            console.log('Número digitado inválido!');
        }

        total++;
    }
    total -= 1;
    console.log(`Porcentagem de cada candidato:\n- Serra = ${serra/total * 100}%\n- Dilma = ${dilma/total * 100}%\n- Ciro Gomes = ${ciro/total * 100}%\n`);
    console.log(`Porcentagem de outros candidatos: ${outros/total * 100}%\nPorcentagem de eleitores indecisos: ${indeciso/total * 100}%\nPorcentagem de votos nulos/bancos: ${nulo/total * 100}%\nTotal de entrevistados: ${total}`);
    
    if ((serra/total * 100) > 50 || (dilma/total * 100) > 50|| (ciro/total * 100) > 50) {
        console.log('Não haveria segundo turno!');
    } else {
        console.log('Haveria segundo turno!')
    }
}

main();