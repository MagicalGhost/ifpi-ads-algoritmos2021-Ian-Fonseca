const input = require('prompt-sync')();

function main() {
    let codigo = 1;
    let grenais = 0;
    let vinter = 0;
    let vgremio = 0;
    let empates = 0;
    let gol1 = 0;
    let gol2 = 0;

    while(codigo == 1) {
        gol1 = Number(input('Informe quantos gols o Inter marcou neste GRENAL: '));
        gol2 = Number(input('Informe quantos gols o Grêmio marcou neste GRENAL: '));

        if (gol1 > gol2) {
            vinter++;
        } else if(gol2 > gol1) {
            vgremio++;
        } else {
            empates++;
        }
        grenais++;
        codigo = Number(input('Novo GRENAL? (1-Sim; 2-Não) '));
    }

    console.log(`Total de GRENAIS: ${grenais}\nVitórias do Inter: ${vinter}\nVitórias do Grêmio: ${vgremio}\nEmpates: ${empates}`);
    if (vinter > vgremio) {
        console.log('Inter obteve mais vitórias em grenais!');
    } else if(vgremio > vinter) {
        console.log('Grêmio obteve mais vitórias em grenais!');
    } else {
        console.log('Não houve vencedor!');
    }
}

main();