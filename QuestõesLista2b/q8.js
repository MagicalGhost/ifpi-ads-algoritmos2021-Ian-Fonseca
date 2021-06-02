const input = require('prompt-sync')();

var valorh = Number(input('Informe o valor de sua hora: '));
var horam = Number(input('Informe quantas horas você trabalha ao mês: '));
var salarioBruto = valorh * horam;

if (salarioBruto <= 900) {
    console.log('Saalário Bruto: (', valorh, '*', horam, ')             : R$', salarioBruto);
    console.log('(-) IR (0%)                 : R$', 0);
    console.log('(-) INSS (10%)              : R$', (salarioBruto * 10)/100);
    console.log('FGTS (11%)                  : R$', (salarioBruto * 11)/100);
    console.log('Total de descontos          : R$', (0 + (salarioBruto * 10)/100));
    console.log('Salário Líquido             : R$', (salarioBruto - (0 + (salarioBruto * 10)/100)));
} else if(salarioBruto > 900 && salarioBruto <= 1500) {
    console.log('Saalário Bruto: (', valorh, '*', horam, ')             : R$', salarioBruto);
    console.log('(-) IR (5%)                 : R$', (salarioBruto * 5)/100);
    console.log('(-) INSS (10%)              : R$', (salarioBruto * 10)/100);
    console.log('FGTS (11%)                  : R$', (salarioBruto * 11)/100);
    console.log('Total de descontos          : R$', ((salarioBruto * 5)/100 + (salarioBruto * 10)/100));
    console.log('Salário Líquido             : R$', (salarioBruto - ((salarioBruto * 5)/100 + (salarioBruto * 10)/100)));
} else if(salarioBruto > 1500 && salarioBruto <= 2500) {
    console.log('Saalário Bruto: (', valorh, '*', horam, ')             : R$', salarioBruto);
    console.log('(-) IR (10%)                 : R$', (salarioBruto * 10)/100);
    console.log('(-) INSS (10%)              : R$', (salarioBruto * 10)/100);
    console.log('FGTS (11%)                  : R$', (salarioBruto * 11)/100);
    console.log('Total de descontos          : R$', ((salarioBruto * 10)/100 + (salarioBruto * 10)/100));
    console.log('Salário Líquido             : R$', (salarioBruto - ((salarioBruto * 10)/100 + (salarioBruto * 10)/100)));
} else {
    console.log('Saalário Bruto: (', valorh, '*', horam, ')             : R$', salarioBruto);
    console.log('(-) IR (20%)                 : R$', (salarioBruto * 20)/100);
    console.log('(-) INSS (10%)              : R$', (salarioBruto * 10)/100);
    console.log('FGTS (11%)                  : R$', (salarioBruto * 11)/100);
    console.log('Total de descontos          : R$', ((salarioBruto * 20)/100 + (salarioBruto * 10)/100));
    console.log('Salário Líquido             : R$', (salarioBruto - ((salarioBruto * 20)/100 + (salarioBruto * 10)/100)));
}