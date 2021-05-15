const input = require('prompt-sync')();
var num = Number(input('Informe um valor de até 4 digitos: '));
while(num > 9999){
    console.log('O valor não pode possuir mais de 4 digitos!');
    num = Number(input('Informe um valor de ATÉ 4 digitos: '));
}
console.log('A soma dos digitos fornecidos é: ',    ((num%10) + (((num - num%10)/10)%10) + (((num - num%100)/100)%10) + ((num - num%1000)/1000)));