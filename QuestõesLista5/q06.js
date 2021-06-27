const input = require('prompt-sync')();

function main() {
    let frase = input('Frase: ');

    console.log(algarismos(frase));
}

function algarismos(f) {
    let r = '';

    for (let i = 0; i < f.length; i++) {
        if (f[i] == '1') {
            r += ' um';
        } else if(f[i] == '2'){
            r += ' dois';
        } else if(f[i] == '3'){
            r += ' três';
        } else if(f[i] == '4'){
            r += ' quatro';
        } else if(f[i] == '5'){
            r += ' cinco';
        } else if(f[i] == '6'){
            r += ' seis';
        } else if(f[i] == '7'){
            r += ' sete';
        } else if(f[i] == '8'){
            r += ' oito';
        } else if(f[i] == '9'){
            r += ' nove';
        } else if(f[i] == '0'){
            r += ' zero';
        } else {
            r += f[i];
        }
    }

    return r;
}

main();