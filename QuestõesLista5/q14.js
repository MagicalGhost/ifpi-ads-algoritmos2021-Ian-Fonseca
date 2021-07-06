const input = require('prompt-sync')();

function main() {
    let nome = String(input('Informe seu nome: '));

    console.log(`Login: ${login(nome)}`);
}

function login(n) {
    let aux = n.split(' ');
    let retorno = '';

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < aux[i].length; j++) {
            if(aux[i][j].charCodeAt(j) >= 65 && aux[i][j].charCodeAt(j) <= 90){
                retorno += aux[i][j];
            }
            
        }
    }
    return retorno;
}

main();