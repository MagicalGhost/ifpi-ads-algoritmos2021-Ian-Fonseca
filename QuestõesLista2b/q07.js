const input = require('prompt-sync')();

var salario = Number(input('Informe o salário: '));
var aumento;

if (salario <= 280) {
    aumento = (salario * 20)/100;
    console.log('Salário antes do reajuste: ', salario, '\nPercentual do aumento aplicado: ', 20,'%\nValor do aumento: ', aumento, '\nNovo salário após o aumento: ', (salario + aumento));
} else if(salario > 280 && salario <= 700) {
    aumento = (salario * 15)/100;
    console.log('Salário antes do reajuste: ', salario, '\nPercentual do aumento aplicado: ', 15,'%\nValor do aumento: ', aumento, '\nNovo salário após o aumento: ', (salario + aumento));
} else if(salario > 700 && salario <= 1500) {
    aumento = (salario * 10)/100;
    console.log('Salário antes do reajuste: ', salario, '\nPercentual do aumento aplicado: ', 10,'%\nValor do aumento: ', aumento, '\nNovo salário após o aumento: ', (salario + aumento));
} else {
    aumento = (salario * 5)/100;
    console.log('Salário antes do reajuste: ', salario, '\nPercentual do aumento aplicado: ', 5,'%\nValor do aumento: ', aumento, '\nNovo salário após o aumento: ', (salario + aumento));
}