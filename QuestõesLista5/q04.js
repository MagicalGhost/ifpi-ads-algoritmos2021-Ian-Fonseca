const input = require('prompt-sync')();

function main() {
    let frase = input('Informe uma frase: ');

   console.log(nova_frase(frase));
}

function nova_frase(f) {
    let r = '';
    for (let i = 0; i < f.length; i++) {
        r += f[i] + f[i];
    }
    return r;
}

main();