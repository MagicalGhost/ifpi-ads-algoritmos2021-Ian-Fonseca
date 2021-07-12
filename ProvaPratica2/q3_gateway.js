const input = require('prompt-sync')();

function main() {
    let valor = Number(input('Informe o valor da compra: '));
    let dias = Number(input('Informe em quantos dias gostaria de receber a grana: '));
    let taxa = 0;
    let parcelas = 0;

    while(dias < 2 || dias > 31) {
        console.log('O número de dias deve ser entre 2 e 31 dias!');
        dias = Number(input('Informe em quantos dias gostaria de receber a grana: '));
    }

    let forma = Number(input('Informe a forma de pagamento (1-À vista; 2-Parcelado): '));

    while(forma != 1 && forma != 2) {
        console.log('Valor informado inválido!');
        forma = Number(input('Informe a forma de pagamento (1-À vista; 2-Parcelado): '));
    }

    if (forma == 1) {
        if (dias >= 2 && dias < 14) {
            taxa = valor * 0.0439 + 0.4;
            dias = 2;
        } else if(dias >= 14 && dias < 30) {
            taxa = valor * 0.0349 + 0.4;
            dias = 14;
        } else {
            taxa = valor * 0.0299 + 0.4;
            dias = 31;
        }
        console.log(`-------------Nota Fiscal------------\nValor da compra: R$ ${valor}\nForma de pagamento: à vista\nValor taxa cobrada pelo gateway: R$ ${taxa}\nValor líquido: R$ ${valor - taxa}\nDias: ${dias}`);
    } else {
        parcelas = Number(input('informe a quantidade de parcelas: '));

        while(parcelas < 2 || parcelas > 12) {
            console.log('Valor informado inválido!');
            parcelas = Number(input('informe a quantidade de parcelas: '));
        }

        if (dias >= 2 && dias < 14) {
            taxa = valor * 0.0499 + 0.4 + 0.01 * parcelas;
            dias = 2;
        } else if(dias >= 14 && dias < 30) {
            taxa = valor * 0.0399 + 0.4 + 0.01 * parcelas;
            dias = 14;
        } else {
            taxa = valor * 0.0349 + 0.4 + 0.01 * parcelas;
            dias = 31;
        }
        console.log(`-------------Nota Fiscal------------\nValor da compra: R$ ${valor}\nForma de pagamento: Parcelado(${parcelas}x)\nValor taxa cobrada pelo gateway: R$ ${taxa}\nValor líquido: R$ ${valor - taxa}\nDias: ${dias}`);
    }

}

main();