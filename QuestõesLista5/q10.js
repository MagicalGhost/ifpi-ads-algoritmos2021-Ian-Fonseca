const input = require('prompt-sync')();

function main() {
    let palavra = input('Informe uma palavra: ');

    if (palindroma(palavra) == true) {
        console.log('É uma palavra palindroma');
    } else {
        console.log('Não é uma palavra palindroma');
    }
}

function palindroma(p) {
    let r = '';
    for (let i = p.length - 1; i >= 0; i--) {
        r += p[i];
    }

    if (p == r) {
        return true;
    } else {
        return false;
    }
}

main();