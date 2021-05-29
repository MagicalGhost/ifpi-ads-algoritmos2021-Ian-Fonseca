const input = require('prompt-sync')();

function horajogo(hi, mi, hf, mf) {
    var ht = 0;
    var mt = 0;
    if (hf == hi) {
        if (mf == mi) {
            console.log('Duração do jogo de 24:00hrs!');
        } else if(mf > mi) {
            mt = mf - mi;
            console.log('Duração do jogo: ', ht, 'h', mt, 'min');
        } else {
            console.log('Valores inseridos invalidos!');
        }
    } else if(hf > hi) {
        ht = (hf * 60 + mf) - (hi * 60 + mi);
        mt = ht%60;
        console.log('Duração do jogo: ', (ht - mt)/60, 'h', mt, 'min');
    } else {
        ht = (((24 - hi) * 60) + mi) + (hf * 60 + mf);
        mt = ht%60;
        console.log('Duração do jogo: ', (ht - mt)/60, 'h', mt, 'min');
    }
}

var horai = Number(input('Informe a hora do inicio do jogo: '));
var mini = Number(input('Informe o minuto do inicio do jogo: '));
var horaf = Number(input('Informe a hora do final do jogo: '));
var minf = Number(input('Informe o minuto do final do jogo: '));

horajogo(horai, mini, horaf, minf);