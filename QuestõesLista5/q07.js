const input = require('prompt-sync')();

function main() {
    let verbo = input('Informe um verbo regular terminado em ER: ');

    console.log(conjuga(verbo));
}

function conjuga(v) {
    let r = '';
    for (let i = 0; i < v.length - 2; i++) {
        r += v[i];
    }
    r = r + 'o\n' + r + 'es\n' + r + 'e\n' + r + 'emos\n' + r + 'eis\n' + r + 'em';
    return r;
}

main();