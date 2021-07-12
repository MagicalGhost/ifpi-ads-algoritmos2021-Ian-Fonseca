const input = require('prompt-sync')();

function main() {
    let frase = String(input('Frase: '));

    console.log(`Frase: ${consoantes(frase)}`);
}

function truncar(f) {
    let novafrase = ['', ''];

    for (let i = 0; i < Math.floor(f.length/2); i++) {
        novafrase[0] += f[i];
    }

    for (let i = Math.floor(f.length/2); i < f.length; i++) {
        novafrase[1] += f[i];
    }

    return novafrase;
}

function inverter(f) {
    let f1 = '';
    let f2 = '';

    for (let i = truncar(f)[0].length - 1; i >= 0; i--){
        f1 += truncar(f)[0][i]
    }

    for (let i = truncar(f)[1].length - 1; i >= 0; i--){
        f2 += truncar(f)[1][i]
    }

    return f1 + f2;
}

function vogais(f) { // ou vogais e números
    let frase = inverter(f);
    let novafrase = '';

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == 'a' || frase[i] == 'A') {
            novafrase += 1;
        } else if(frase[i] == 'e' || frase[i] == 'E') {
            novafrase += 2;
        } else if(frase[i] == 'i' || frase[i] == 'I') {
            novafrase += 3;
        } else if(frase[i] == 'o' || frase[i] == 'O') {
            novafrase += 4;
        } else if(frase[i] == 'u' || frase[i] == 'U') {
            novafrase += 5;
        } else {
            novafrase += frase[i];
        }
    }

    // CASO OS NÚMEROS DAS VOGAIS DEVAM SER TRANSFORMADOS EM * O CODIGO É ESSE (Para funcionar devera comentar a estrutura de repetição superior ^):
    /*for (let i = 0; i < frase.length; i++) {
        if (frase[i] == 'a' || frase[i] == 'A') {
            novafrase += 1;
        } else if(frase[i] == 'e' || frase[i] == 'E') {
            novafrase += 2;
        } else if(frase[i] == 'i' || frase[i] == 'I') {
            novafrase += 3;
        } else if(frase[i] == 'o' || frase[i] == 'O') {
            novafrase += 4;
        } else if(frase[i] == 'u' || frase[i] == 'U') {
            novafrase += 5;
        } else if(frase[i] == '1') {
            novafrase += '*';
        } else if(frase[i] == '2') {
            novafrase += '**';
        } else if(frase[i] == '3') {
            novafrase += '***';
        } else if(frase[i] == '4') {
            novafrase += '****';
        } else if(frase[i] == '5') {
            novafrase += '*****';
        } else if(frase[i] == '6') {
            novafrase += '******';
        } else if(frase[i] == '7') {
            novafrase += '*******';
        } else if(frase[i] == '8') {
            novafrase += '********';
        } else if(frase[i] == '9') {
            novafrase += '*********';
        } else if(frase[i] == '0') {
            novafrase += '#';
        } else {
            novafrase += frase[i];
        }
    }*/

    return novafrase;
}

function numeros(f) {
    let frase = vogais(f);
    let novafrase = '';

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == '1') {
            novafrase += '*';
        } else if(frase[i] == '2') {
            novafrase += '**';
        } else if(frase[i] == '3') {
            novafrase += '***';
        } else if(frase[i] == '4') {
            novafrase += '****';
        } else if(frase[i] == '5') {
            novafrase += '*****';
        } else if(frase[i] == '6') {
            novafrase += '******';
        } else if(frase[i] == '7') {
            novafrase += '*******';
        } else if(frase[i] == '8') {
            novafrase += '********';
        } else if(frase[i] == '9') {
            novafrase += '*********';
        } else if(frase[i] == '0') {
            novafrase += '#';
        } else {
            novafrase += frase[i];
        }
    }

    return novafrase;
}

function consoantes(f) {
    //se o caso das vogais estiver interpretado corretamente:
    let fr = numeros(f);
    // caso o caso das vogais la na função for a interpretação correta:
    //let frase = vogais(f);
    let codigo = 0;
    let novafrase = '';

    for (let i = 0; i < fr.length; i++) {
        if (fr.charCodeAt(i) >= 65 && fr.charCodeAt(i) <= 90) {
            codigo = fr.charCodeAt(i) + 10;
            if (codigo > 90) {
                codigo -= 26;
            }
            novafrase += String.fromCharCode(codigo);
        } else if(fr.charCodeAt(i) >= 97 && fr.charCodeAt(i) <= 122) {
            codigo = fr.charCodeAt(i) + 10;
            if (codigo > 122) {
                codigo -= 26;
            }
            novafrase += String.fromCharCode(codigo);
        } else {
            novafrase += fr[i];
        }
    }

    return novafrase;
}

main();