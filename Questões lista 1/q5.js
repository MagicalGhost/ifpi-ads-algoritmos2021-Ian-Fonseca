const input = require('prompt-sync')();
var num = Number(input('Informe um valor inteiro de 3 digitos: '));
while(num < 100 || num >= 1000) {
    console.log('O valor deve ter 3 digitos!');
    num = Number(input('Informe um valor inteiro de 3 digitos: '));
}
console.log('A soma do digito da centena, dezena e unidade é: ' + (num%10 + ((num - num%10)%100)/10 + (num - num%100)/100));