const input = require('prompt-sync')();

function main() {
    let frase = input('informe uma frase: ');

    console.log(nova_frase(frase));
}

function nova_frase(f) {
    let r = '';
    for (let i = 0; i < f.length; i++) {
        if (f[i] != ' ') {
            r += f[i]
        }
    }
    return r;
}

main();