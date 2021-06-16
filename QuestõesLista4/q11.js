const input = require('prompt-sync')();

function main() {
    let matricula = String(input('Informe a matricula do aluno: '));
    let nota1 = Number(input('informe a primeira nota: '));
    let nota2 = Number(input('informe a segunda nota: '));
    let nota3 = Number(input('informe a terceira nota: '));

    media(matricula, nota1, nota2, nota3);
}

function media(mat, n1, n2, n3) {
    let mediafinal;
    let aprovados = 0;
    let reprovados = 0;
    while(mat != 0) {
        mediafinal = (2 * n1 + 3 * n2 + 5 * n3)/10;
        if (mediafinal >= 7) {
            console.log('Aprovado!\n');
            aprovados++;
        } else {
            console.log('Reprovado!\n');
            reprovados++;
        }

        mat = matricula = String(input('Informe a matricula do aluno: '));
        n1 = Number(input('informe a primeira nota: '));
        n2 = Number(input('informe a segunda nota: '));
        n3 = Number(input('informe a terceira nota: '));
    }
    let totalalunos = aprovados + reprovados;
    console.log(`\n**********************\nTotal de alunos: ${totalalunos}\nAprovados: ${aprovados}\nReprovados: ${reprovados}`);
}

main();