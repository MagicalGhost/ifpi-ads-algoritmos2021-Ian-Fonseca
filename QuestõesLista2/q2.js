const input = require('prompt-sync')();

function compara(num1, num2){
    if (num1 > num2) {
        console.log('Maior número: ', num1, '\nMenor número: ', num2);
    } else if(num1 < num2) {
        console.log('Maior número: ', num2, '\nMenor número: ', num1);
    } else {
        console.log('Números iguais');
    }
}
function main() {
    var num1 = Number(input('Informe o primeiro número: '));
    var num2 = Number(input('Informe o segundo número: '));
    compara(num1, num2); 
}

 main();