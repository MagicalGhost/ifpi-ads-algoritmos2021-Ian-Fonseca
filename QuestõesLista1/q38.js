const input = require('prompt-sync')();
var num1 = Number(input('Informe o primeiro numerador: '));
var den1 = Number(input('Informe o primeiro denominador: '));
var num2 = Number(input('Informe o segundo numerador: '));
var den2 = Number(input('Informe o segundo denominador: '));
var resto;
var x = den1;
var y = den2;
while(resto != 0){
    resto = x%y;
    x = y;
    y = resto;
}
var soma = ((((den1 * den2)/x)/den1) * num1) + ((((den1 * den2)/x)/den2) * num2);
console.log('A soma de ambas as frações fornecidas em forma de fração é:\n', (soma), '\n---\n', ((den1 * den2)/x));