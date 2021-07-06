const input = require('prompt-sync')();

function main() {
    let texto = String(input('Texto: '));
    let p1 = Number(input('A partir de qual digito começar a extrair: '));
    let p2 = Number(input('Quantos caracteres extrair: '));

    console.log(`${substr(texto, p1, p2)}`);
}

function substr(t, n1, n2) {
    let retorno = '';
    let aux = 0;
    for (let i = n1; aux < n2; i++) {
        if (i < t.length) {
            retorno += t[i];
        }
        aux++;
    }
    return retorno;
}

main();