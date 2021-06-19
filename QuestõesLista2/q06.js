const input = require('prompt-sync')();

function triangulo(ang1, ang2, ang3){
    if((ang1 != 0 && ang2 != 0 && ang3 != 0) && (ang1 + ang2 + ang3) == 180){
        if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
            console.log('Triangulo acutângulo!');
        } else if(ang1 == 90 || ang2 == 90 || ang3 == 90) {
            console.log('Triangulo retangulo!');
        }else if(ang1 > 90 || ang2 > 90 || ang3 > 90){
            console.log('Trangulo obtusângulo!');
        }
    } else {
        console.log('Você informou um ângulo de 0°, não existe ângulo de 0°!\nOU\nA soma dos ângulos informados não é igual a 180°!');
    }
}
 function main() {
    var angulo_1 = Number(input('Informe o primeiro ângulo: '));
    var angulo_2 = Number(input('Informe o segundo ângulo: '));
    var angulo_3 = Number(input('Informe o terceiro ângulo: '));
    triangulo(angulo_1, angulo_2, angulo_3);
 }

 main();