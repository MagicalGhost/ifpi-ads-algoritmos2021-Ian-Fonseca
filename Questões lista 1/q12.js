const input = require('prompt-sync')();
var sal = Number(input('Informe o salário: '));
console.log('O salário com o acrescimo de 25% é: ' + (sal + (sal * 25)/100));