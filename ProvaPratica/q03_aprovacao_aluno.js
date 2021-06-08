const input = require('prompt-sync')();

function main() {
    var nome = String(input('Informe o nome do aluno: ')) // Nome do aluno
    var av1 = Number(input('Informe a nota do aluno na avaliação 1: ')) // 1° avaliação
    var av2 = Number(input('Informe a nota do aluno na avaliação 2: ')) // 2° avaliação
    var atvs = Number(input('Informe a nota do aluno nas atividades: ')) // atividades
    var media_semestral = (2 * av1 + 3 * av2 + 1 * atvs)/(2 + 3 + 1); // Média ponderada semestral

    aprovado_reprovado(media_semestral);
}

function aprovado_reprovado(media) {
    if (media >= 7) { // Caso o aluno tenha média maior que 7 é aprovado
        console.log(`Média semestral: ${media}, Situação: AP`); 
    } else if(media < 4) { // Caso o aluno tenha média menor que 4 é reprovado direto
        console.log(`Média semestral: ${media}, Situação: RP`); 
    } else { // Caso o aluno tenha média entre 7 e 4 é reprovado e vai para prova final
        console.log(`Média semestral: ${media}, Situação: Em PF`);
        var prova_final = Number(input('Informe a nota na prova final: '));
        var media_final = (prova_final + media)/2;
        if (media_final >= 6) { // Caso o aluno tenha média da pf e da media semestral maior que 6 é aprovado pos pf
            console.log(`Média semestral pós PF: ${media_final}, Situação: Aprovado pós PF`);
        } else { // Caso o aluno tenha média da pf e da media semestral menor que 6 é reprovado pos pf
            console.log(`Média semestral pós PF: ${media_final}, Situação: Reprovado pós PF`);
        }
    }
}

main();