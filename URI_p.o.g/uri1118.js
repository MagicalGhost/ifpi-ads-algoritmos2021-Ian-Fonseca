const input = require('prompt-sync')();

function main() {
    let codigo = 1;
    while(codigo == 1) {
        let nota1 = Number(input('Informe a primeira nota: '));
        while(nota1 < 1 || nota1 > 10) {
            console.log('Nota informada inválida!');
            nota1 = Number(input('Por favor informe uma nota valida para a primeira nota: '));
        }

        let nota2 = Number(input('Informe a segunda nota: '));

        while(nota2 < 1 || nota2 > 10) {
            console.log('Nota informada inválida!');
            nota2 = Number(input('Por favor informe uma nota valida para a segunda nota: '));
        }

        console.log(`Média = ${(nota1 + nota2)/2}`);
        codigo = Number(input('Novo cálculo? (1-Sim; 2-Não) '));
    }
}

main();