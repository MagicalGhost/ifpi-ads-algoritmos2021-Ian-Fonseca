const input = require('prompt-sync')(); //INCOMPLETA

function horajogo(hi, mi, hf, mf) {
    var ht = 0;
    var mt = 0;
    if (hf == hi) {
        if (mf == mi) {
            console.log('Duração do jogo de 24h:00!');
        } else if(mf > mi) {
            mt = mf - mi;
            console.log('Duração do jogo: ', ht, 'h:', mt, 'min');
        } else {
            console.log('Valores invalidos!');
        }




    } else if(hf > hi){
        if (mf == mi) {
            ht = hf - hi;
            mt = 0;
            console.log('Duração do jogo: ', ht, 'h:', mt, 'min');
        } else if(mf > mi) {
            ht = hf - hi;
            mt = mf - mi;
            console.log('Duração do jogo: ', ht, 'h:', mt, 'min');
        } else {
            if (condition) {
                
            } else {
                
            }
            mt = 60 - mi + mf;

        }
    
    
    
    
    
    
    
    
    
    } else {

    }
}

var horai = Number(input('Informe a hora do inicio do jogo: '));
var mini = Number(input('Informe o minuto do inicio do jogo: '));
var horaf = Number(input('Informe a hora do final do jogo: '));
var minf = Number(input('Informe o minuto do final do jogo: '));

horajogo(horai, mini, horaf, minf);