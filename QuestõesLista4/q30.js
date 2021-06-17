const input = require('prompt-sync')();

function main() {
    let nomep = String(input('Informe o nome do produto: '));
    let precop = Number(input('Informe o preço do produto: '));
    let qtdc = Number(input('Informe a quantidade comprada: '));
    let desc = 0;

    while(nomep != "fim" && nomep != "FIM") {
        desc = desconto(nomep, precop, qtdc);
        console.log(`==============================\nNome do produto: ${nomep}\nPreço unitário: ${precop}\nQuantidade: ${qtdc}\nTotal: ${precop * qtdc}\nTotal c/ desconto: ${precop * qtdc - desc}`);
        nomep = String(input('Informe o nome do produto: '));
        precop = Number(input('Informe o preço do produto: '));
        qtdc = Number(input('Informe a quantidade comprada: '));
    }
}

function desconto(n, p, qtdd) {
    let d = 0;
    
    if (qtdd > 0 && qtdd <= 10) {
        return d = 0 * (p * qtdd);
    } else if(qtdd > 10 && qtdd <= 20) {
        return d = 0.1 * (p * qtdd);
    } else if(qtdd > 20 && qtdd <= 50) {
        return d = 0.2 * (p * qtdd);
    } else if(qtdd > 50) {
        return d = 0.25 * (p * qtdd);
    } else {
        return console.log('Quantidade inválida!');
    }
}

main();