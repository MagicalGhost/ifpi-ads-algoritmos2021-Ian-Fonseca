const input = require('prompt-sync')(); //na medida do possivel... ATUALIZADO, PROGRAMAÇÃO ORIENTADA A GAMBIARRA (P.O.G)

function teste(diaa, mesa, anoa, dian, mesn, anon){
    var diat = 0;
    var mest = 0;
    var anot = 0;
    if (diaa == dian) {
        diat = 0;
        if (mesa == mesn) {
            mest = 0;
            if (anoa == anon) {
                anoa = 0;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        } else if(mesa > mesn) {
            mest = mesa - mesn;
            if (anoa == anon) {
                anoa = 0;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        } else {
            if (anoa == anon) {
                anoa = 0;
                mest = mesa - mesn;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon - 1;
                mest = (12 - mesn) + mesa;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        }
    } else if(diaa > dian) {
        if (mesa == mesn) {
            mest = 0;
            diat = diaa - dian;
            if (anoa == anon) {
                anoa = 0;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        } else if(mesa > mesn) {
            mest = mesa - mesn;
            diat = (diaa - dian)%30;
            if (anoa == anon) {
                anoa = 0;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        } else {
            diat = diaa - dian;
            if (anoa == anon) {
                anoa = 0;
                mest = mesa - mesn;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon - 1;
                mest = (12 - mesn) + mesa;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        }
    } else {
        if (mesa == mesn) {
            mest = 0;
            diat = diaa;
            if (anoa == anon) {
                anoa = 0;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        } else if(mesa > mesn) {
            diat = dian - diaa;
            mest = mesa - mesn + 1;
            if (anoa == anon) {
                anoa = 0;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        } else {
            diat = diaa;
            if (anoa == anon) {
                anoa = 0;
                mest = mesa - mesn;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else if(anoa > anon) {
                anot = anoa - anon - 1;
                mest = (12 - mesn) + mesa;
                console.log('Tempo de vida:\n', anot, 'anos', mest, 'mes(es)', diat, 'dia(s)!');
            } else {
                console.log('Data informada invalida, o ser ainda nao possui anos de vida!');
            }
        }
    }
}

var diaa = Number(input('Informe o dia atual: '));
var mesa = Number(input('Informe o mes atual: '));
var anoa = Number(input('Informe o ano atual: '));
var dian = Number(input('Informe o dia de nascimento: '));
var mesn = Number(input('Informe o mes de nascimento: '));
var anon = Number(input('Informe o ano de nascimento: '));


teste(diaa, mesa, anoa, dian, mesn, anon);