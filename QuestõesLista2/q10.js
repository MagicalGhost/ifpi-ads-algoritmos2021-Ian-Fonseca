const input = require('prompt-sync')();

function validador(dia, mes, ano) {
    if (ano%4 == 0) {
        if (mes == 2 || dia <= 0) {
            if (dia > 29 || dia <= 0) {
                console.log('Data informada invalida!');
            } else {
                console.log('Data válida: ' + dia + '/' + mes + '/' + ano);
            }
        } else if((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia <= 31) {
            console.log('Data válida: ' + dia + '/' + mes + '/' + ano);
        } else if(mes > 0 && mes <= 12 && dia <= 30){
            console.log('Data válida: ' + dia + '/' + mes + '/' + ano);
        } else {
            console.log('Data informada invalida!');
        }
    } else {
        if (mes == 2 || dia <= 0) {
            if (dia > 28 || dia <= 0) {
                console.log('Data informada invalida!');
            } else {
                console.log('Data válida: ' + dia + '/' + mes + '/' + ano);
            }
        } else if((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia <= 31) {
            console.log('Data válida: ' + dia + '/' + mes + '/' + ano);
        } else if(mes > 0 && mes <= 12 && dia <= 30){
            console.log('Data válida: ' + dia + '/' + mes + '/' + ano);
        } else {
            console.log('Data informada invalida!');
        }
    }
}

function main() {
    var dia = Number(input('Informe um dia: '));
    var mes = Number(input('Informe um mes: '));
    var ano = Number(input('Informe um ano: '));

    validador(dia, mes, ano);
}

main();