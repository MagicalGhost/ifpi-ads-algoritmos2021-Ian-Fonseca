const input = require('prompt-sync')();

function main() {
    let frase = String(input('Frase: '));

    console.log(`Frase criptografada: ${tira_vogal(frase)}\nFrase descriptografada: ${descriptografa(frase)}`);
}

function tira_vogal(f) {
    let nfrase = '';

    for (let i = 0; i < f.length; i++) {
        if ((f.charCodeAt(i) == 65 || f.charCodeAt(i) == 97) || (f.charCodeAt(i) == 69 || f.charCodeAt(i) == 101) || (f.charCodeAt(i) == 73 || f.charCodeAt(i) == 105) || (f.charCodeAt(i) == 79 || f.charCodeAt(i) == 111) || (f.charCodeAt(i) == 85 || f.charCodeAt(i) == 117)) {
            nfrase += ' ';
        } else {
            nfrase += f[i];
        }
        
    }
    return nfrase;
}

function vogal(f) {
    let vogais = '';

    for (let i = 0; i < f.length; i++) {
        if ((f.charCodeAt(i) == 65 || f.charCodeAt(i) == 97) || (f.charCodeAt(i) == 69 || f.charCodeAt(i) == 101) || (f.charCodeAt(i) == 73 || f.charCodeAt(i) == 105) || (f.charCodeAt(i) == 79 || f.charCodeAt(i) == 111) || (f.charCodeAt(i) == 85 || f.charCodeAt(i) == 117)) {
            vogais += f[i];
        } else {
            vogais += ' ';
        }
        
    }
    return vogais;
}

function descriptografa(f) {
    let vogais = vogal(f);
    let nfrase = tira_vogal(f);
    let retorno = '';

    for (let i = 0; i < f.length; i++) {
        if (vogais[i] != ' ') {
            retorno += vogais[i];
        } else {
            retorno += nfrase[i];
        }
    }
    return retorno;
}

main();