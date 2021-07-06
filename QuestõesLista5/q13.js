const input = require('prompt-sync')();

function main() {
    let nome = String(input('Informe seu nome: '));

    console.log(`Nome em texto científico: ${separador(nome)}`);
}

function separador(n) {
    let aux = n.split(' ');
    let retorno = aux[aux.length - 1];

    for (let i = 0; i < aux.length - 1; i++) {
        for (let j = 0; j < aux[i].length; j++) {
            if(aux[i][j].charCodeAt(j) >= 65 && aux[i][j].charCodeAt(j) <= 90){
                retorno += ' ' + aux[i][j] + '.';
            }
            
        }
        
    }
    return retorno;
}

main();