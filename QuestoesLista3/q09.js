const input = require('prompt-sync')();

function main() {
    
    teste();
}

function teste() {
    var numero_prova = 1;
    var quantidade_nadadores = 1;
    var somaa = 0;
    var somab = 0;
    while(numero_prova > 0) {

        numero_prova = Number(input('Informe o número da prova: '));
        quantidade_nadadores = Number(input('Informe a quantidade de nadadores: '));

        for (let i = 1; i <= numero_prova; i++) {

            console.log(`Prova: ${numero_prova}`);

            for (let j = 1; j <= quantidade_nadadores; j++) {

                var nome = Number(input('Informe o nome do nadador: '));
                var lugar = Number(input('Informe a classificação do nadador: '));
                var tempo = Number(input('informe o tempo do nadador: '));
                var clube = String(input('Informe o clube do nadador: '));

                if (lugar == 1) {
                    if (clube == 'a') {
                        somaa = somaa + 9;
                    } else {
                        somab = somab + 9;
                    }
                } else if(lugar == 2) {
                    if (clube == 'a') {
                        somaa = somaa + 6;
                    } else {
                        somab = somab + 6;
                    }
                } else if(lugar == 3) {
                    if (clube == 'a') {
                        somaa = somaa + 4;
                    } else {
                        somab = somab + 4;
                    }
                } else if(lugar == 4) {
                    if (clube == 'a') {
                        somaa = somaa + 3;
                    } else {
                        somab = somab + 3;
                    }
                } else {
                    if (clube == 'a') {
                        somaa = somaa + 0;
                    } else {
                        somab = somab + 0;
                    }
                }
                
            }
        }
    }
    console.log(`Total de pontos clube A: ${somaa}\nTotal de pontos clube B: ${somab}`);
}

main();