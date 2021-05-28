const input = require('prompt-sync')();

function ordena(num1, num2, num3){
    if((num1 >= num2 && num1 >= num3) && (num2 >= num3)){
        console.log(num1, num2, num3);
    } else if((num1 >= num2 && num1 >= num3) && (num3 >= num2)){
        console.log(num1, num3, num2);
    }else if((num2 >= num1 && num2 >= num3) && (num1 >= num3)){
        console.log(num2, num1, num3);
    } else if((num2 >= num1 && num2 >= num3) && (num3 >= num1)){
        console.log(num2, num3, num1);
    }else if((num3 >= num1 && num3 >= num2) && (num1 >= num2)){
        console.log(num3, num1, num2);
    }else if((num3 >= num1 && num3 >= num2) && (num2 >= num1)){
        console.log(num3, num2, num1);
    }
}

var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
var num3 = Number(input('Informe o terceiro número: '));
ordena(num1, num2, num3);