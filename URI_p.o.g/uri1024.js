const input = require('prompt-sync')();

function main() {
    let texto = input('Informe o texto a ser criptografado: ');

    console.log(primeira_passada(texto));
    console.log(segunda_passada(texto));
    console.log(terceira_passada(texto));
}

function primeira_passada(t) {
    let retorno = '';
    let t_em_ascii = '';
    let t_mais_3 = '';

    for (let i = 0; i < t.length; i++) {
        t_em_ascii = t.charCodeAt(i);
        t_mais_3 = String.fromCharCode((t_em_ascii + 3));
        if ((t_em_ascii >= 65 && t_em_ascii <= 90) || (t_em_ascii >= 97 && t_em_ascii <= 122)) {
            retorno = retorno + t_mais_3;
        } else {
            retorno = retorno + t[i];
        }
    }

    return retorno;
}

function segunda_passada(t) {
    let retorno = '';

    for (let i = (t.length - 1); i >= 0; i--) {
        retorno = retorno + primeira_passada(t)[i];
    }

    return retorno;
}

function terceira_passada(t) {
    let x = segunda_passada(t);
    let retorno = '';
    let x_em_ascii = '';
    let x_menos_1 = '';

    for (let i = 0; i < x.length; i++) {
        x_em_ascii = x.charCodeAt(i);
        x_menos_1 = String.fromCharCode((x_em_ascii - 1));

        if (i < Math.trunc(x.length/2)) {
            retorno = retorno + x[i];
        } else {
            retorno = retorno + x_menos_1;
        }
        
    }
    return retorno;
}

main();