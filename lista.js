const input = require('prompt-sync')();

// ### QUESTÃO 01 ###
/*var vms = Number(input('Informe a velocidade em m/s: '));
console.log('A velocidade informada (' + vms + 'm/s) é equivalente a ' + (vms*3.6) + 'km/h');*/

// ### QUESTÃO 02 ###
/*var vh = Number(input('Informe um valor em horas: '));
var vm = Number(input('Informe um valor em minutos: '));
console.log('O valor total em minutos é equivalente a ' + ((vh * 60) + vm) + 'minutos');*/

// ### QUESTÃO 03 ###
/*var vm = Number(input('Informe um valor em minutos: '));
console.log('O valor informado em horas e minutos é equivalente a ' + ((vm - vm%60)/60) + 'h ' + (vm%60) + 'min');*/

// ### QUESTÃO 04 ###
/*var dollar = Number(input('Informe um valor em dollar: '));
console.log('O valor informado em dollar é equivalente a R$'+ (dollar * 5.22) + ' na cotação atual(11/05/2021 - 5,22)');*/

// ### QUESTÃO 05 ###
/*var num = Number(input('Informe um valor inteiro de 3 digitos: '));
while(num < 100 || num >= 1000) {
    console.log('O valor deve ter 3 digitos!');
    num = Number(input('Informe um valor inteiro de 3 digitos: '));
}
console.log('A soma do digito da centena, dezena e unidade é: ' + (num%10 + ((num - num%10)%100)/10 + (num - num%100)/100));*/

// ### QUESTÃO 06 ###
/*var vkm = Number(input('Informe uma velocidade em km/h: '));
console.log('A velocidade informada (' + vkm + 'km/h) é equivalente a ' + (vkm/3.6) + 'm/s');*/

// ### QUESTÃO 07 ###
/*var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
var num3 = Number(input('Informe o terceiro número: '));
console.log('A soma dos dois primeiros números informados é: ' + (num1 + num2) + '\nA diferença dos dois ultimos números informados é: ' + (num2 - num3));*/

// ### QUESTÃO 08 ###
/*var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
console.log('A divisão da soma pela diferença dos números informados é: ' + ((num1 + num2)/(num1 - num2)));*/

// ### QUESTÃO 09 ###
/*var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
console.log(num2, num1);*/

// ### QUESTÃO 10 ###
/*var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
console.log('Quociente da divisão do primeiro número pelo segundo: ' + (num1/num2) + '\nResto da divisão do primeiro pelo segundo: ' + (num1%num2));*/

// ### QUESTÃO 11 ###
/*var num = Number(input('Informe um valor inteiro de 3 digitos: '));
while(num < 100 || num >= 1000) {
    console.log('O valor deve ter 3 digitos!');
    num = Number(input('Informe um valor inteiro de 3 digitos: '));
}
console.log(num%10, ((num - num%10)%100)/10, (num - num%100)/100);*/

// ### QUESTÃO 12 ###
/*var sal = Number(input('Informe o salário: '));
console.log('O salário com o acrescimo de 25% é: ' + (sal + (sal * 25)/100));*/

// ### QUESTÃO 13 ###
/*var vr = Number(input('Informe um valor em real (R$): '));
console.log('70% do valor em real: ' + ((vr * 70)/100));*/

// ### QUESTÃO 14 ###
/*var nota1 = Number(input('Informe a primeira nota do aluno: '));
var peso1 = Number(input('Informe o peso da primeira nota: '));
var nota2 = Number(input('Informe a segunda nota do aluno: '));
var peso2 = Number(input('Informe o peso da segunda nota: '));
var nota3 = Number(input('Informe a terceira nota do aluno: '));
var peso3 = Number(input('Informe o peso da terceira nota: '));
console.log('A média ponderada desse aluno é: ' + (((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3))/(peso1 + peso2 + peso3)));*/

// ### QUESTÃO 15 ###
/*var base = Number(input('Informe o valor da base do triangulo: '));
var h = Number(input('Informe o valor da altura do triangulo: '));
console.log('A área do triangulo é: ', (base * h)/2);*/

// ### QUESTÃO 16 ###
/*var lado = Number(input('Informe o valor do lado de um quadrado: '));
console.log('A área do quadrado é: ', Math.pow(lado, 2));*/

// ### QUESTÃO 17 ###
/*var base = Number(input('Informe a base do retangulo: '));
var h = Number(input('Informe a altura do retangulo: '));
console.log('A área do retangulo é: ', (base * h));*/

// ### QUESTÃO 18 ###
/*var raio = Number(input('Informe o raio da circunferencia: '));
console.log('O comprimento da circunferencia é: ', (2 * Math.PI * raio));*/

// ### QUESTÃO 19 ###
/*var r = Number(input('Informe o valor do raio da esfera: '));
console.log('O volume da esfera é: ', ((4 * Math.PI * Math.pow(r, 3)/3)));*/

// ### QUESTÃO 20 ###
/*var tempc = Number(input('Informe uma temperatura em °C (Celsius): '));
console.log('A temperatura informada em °F (Farenheit) é: ', ((9 * tempc + 160)/5));*/

// ### QUESTÃO 21 ###
/*var tf = Number(input('Informe uma temperatura em °F (Farenheit): '));
console.log('Aa temperatura informada em °C (Celsius) é: ', ((5 * tf - 160)/9));*/

// ### QUESTÃO 22 ###
/*var km = Number(input('Informe um valor em km: '));
console.log('O valor fornecido é equivalente a '+ (km * 1000) + 'm');*/

// ### QUESTÃO 23 ###
/*var kg = Number(input('Informe um valor em kg: '));
console.log('O valor fornecido em gramas é equivalente a ' + (kg * 1000) + 'g');*/

// ### QUESTÃO 24 ###
/*var m = Number(input('Informe um valor em metros: '));
console.log('O valor fornecido em centimetros é equivalente a '+ (m * 100) +'cm');*/

// ### QUESTÃO 25 ###
/*var m = Number(input('Informe um valor em metros: '));
console.log(m, 'm é equivalente a ', (m/1000), 'km');*/

// ### QUESTÃO 26 ###
/*var dias = Number(input('Informe um valor de dias: '));
console.log('O valor informado é igual a ', (dias - dias%7)/7, 'semanas e ', (dias%7), ' dia(s)');*/

// ### QUESTÃO 27 ###
/*var seg = Number(input('Informe um valor de segundos: '));
console.log('O numero fornecido é equivalente a: ', ((seg - seg%3600)/3600), 'h ', (((seg - seg%60)/60)%60), 'm ', (seg%60), 's');*/

// ### QUESTÃO 28 ### 
/*var horas = Number(input('Informe um valor de horas: '));
console.log('O número fornecido é equivalente a: ', ((horas - horas%168)/168), 'sem ', (((horas - horas%24)/24)%24 - (7 * (horas - horas%168)/168)), 'dia(s) ', (horas%24), 'h');*/

// ### QUESTÃO 29 ### 
/*var mes = Number(input('Informe um número de meses: '));
console.log('O número fornecido é equivalente a: ', ((mes - mes%12)/12), ' ano(s) ', (mes%12), ' mes(es)');*/

// ### QUESTÃO 30 ### 
/*var min = Number(input('Informe um valor de minutos: '));
console.log('O valor fornecido em minutos é equivalente a: ', ((min - min%1440)/1440), ' dia(s) ', ((min - ((min - min%1440) + ((min%1440)%60)))/60), ' h ', ((min%1440)%60), ' min');*/

// ### QUESTÃO 31 ### 
/*var bin = String(input('Informe um valor de 4 digitos binarios: '));
var dec = 0;
for(let i = 0; i < bin.length; i++) {
    dec += Math.pow(2, i) * bin[bin.length - i - 1];
};
console.log('O número informado em decimal é: ', dec);*/

// ### QUESTÃO 32 ###
/*var num = Number(input('Informe um valor inteiro de 3 digitos: '));
while(num < 100 || num >= 1000) {
    console.log('O valor deve ter 3 digitos!');
    num = Number(input('Informe um valor inteiro de 3 digitos: '));
}
console.log('A soma do número fornecido (', (num), ') com o seu inverso (', ((num%10 * 100) + (((num - num%10)%100)) + ((num - num%100)/100)), ') é: ', (num - ((num%10 * 100) + (((num - num%10)%100)) + ((num - num%100)/100))));*/

// ### QUESTÃO 33 ### 
/*var num = Number(input('Informe um valor inteiro de 3 digitos: '));
while(num < 100 || num >= 1000) {
    console.log('O valor deve ter 3 digitos!');
    num = Number(input('Informe um valor inteiro de 3 digitos: '));
}
console.log('A soma do número fornecido (', (num), ') com o seu inverso (', ((num%10 * 100) + (((num - num%10)%100)) + ((num - num%100)/100)), ') é: ', (num + ((num%10 * 100) + (((num - num%10)%100)) + ((num - num%100)/100))));*/

// ### QUESTÃO 34 ### 
/*var x = Number(input('Informe o primeiro valor: '));
var y = Number(input('Informe o segundo valor: '));
var z = Number(input('Informe o terceiro valor: '));
console.log('A média dos três valores é: ', (x + y + z)/3);*/

// ### QUESTÃO 35 ###
/*var num = Number(input('Informe um valor de até 4 digitos: '));
while(num > 9999){
    console.log('O valor não pode possuir mais de 4 digitos!');
    num = Number(input('Informe um valor de ATÉ 4 digitos: '));
}
console.log('A soma dos digitos fornecidos é: ',    ((num%10) + (((num - num%10)/10)%10) + (((num - num%100)/100)%10) + ((num - num%1000)/1000)));*/

// ### QUESTÃO 36 ###
/*var anos = Number(input('Informe quantos anos você possui: '));
var meses = Number(input('Informe quantos meses você possui: '));
var dias = Number(input('Informe quantos dias você possui: '));
console.log('Você viveu aproximadamente: ', ((anos * 365) + (meses * 30) + dias), ' dias!');*/

// ### QUESTÃO 37 ###
/*var dias = Number(input('Informe um valor de dias: '));
console.log('A quantidade informada é equivalente a: ', ((dias - dias%365)/365), ' ano(s) ', ((dias - ((dias - dias%365) + ((dias%365)%30)))/30), ' mes(es) ', ((dias%365)%30), ' dia(s)');*/

// ### QUESTÃO 38 ###            INCOMPLETA
/*var num1 = Number(input('Informe o primeiro numerador: '));
var den1 = Number(input('Informe o primeiro denominador: '));
var num2 = Number(input('Informe o segundo numerador: '));
var den2 = Number(input('Informe o segundo denominador: '));*/

// ### QUESTÃO 39 ###
/*var a = Number(input('Informe um valor para A: '));
var b = Number(input('Informe um valor para B: '));
var c = Number(input('Informe um valor para C: '));
console.log('R = ', (Math.pow((a + b), 2)), '\nS = ', (Math.pow((b + c), 2)), '\nD = ', ((Math.pow((a + b), 2) + Math.pow((b + c), 2))/2));*/

// ### QUESTÃO 40 ###
/*var anos = Number(input('Informe a quantos anos você fuma: '));
var num = Number(input('Informe quantos cigarros você fuma por dia: '));
var preco = Number(input('Informe o preço de uma carteira de cigarro: '));
if((anos * 365 * num)%20 == 0) {
    console.log('Você já gastou um total de R$', (((anos * 365 * num)/20) * preco), ' com cigarros!\nPare de fumar imediatamente, fumar faz mal pra saúde, o Ministério da Saúde adverte!');
} else {
    console.log('Você já gastou um total de R$', (((((anos * 365 * num) - (anos * 365 * num)%20)/20) * preco) + preco), ' com cigarros!\nPare de fumar imediatamente, fumar faz mal pra saúde, o Ministério da Saúde adverte!');
}*/

// ### QUESTÃO 41 ###
/*var cf = Number(input('Informe o custo de fábrica do carro: '));
console.log('O custo do consumidor deste carro é de: ', (cf + ((cf * 28)/100) + ((cf * 45)/100)));*/

// ### QUESTÃO 42 ###
/*var x1 = Number(input('Informe o valor de x1: '));
var y1 = Number(input('Informe o valor de y1: '));
var x2 = Number(input('Informe o valor de x2: '));
var y2 = Number(input('Informe o valor de y2: '));
console.log('A distancia entre os pontos é de: ', (Math.sqrt((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))))));*/

// ### QUESTÃO 43 ###
/*var a = Number(input('Informe o valor de a: '));
var b = Number(input('Informe o valor de b: '));
var c = Number(input('Informe o valor de c: '));
var d = Number(input('Informe o valor de d: '));
var e = Number(input('Informe o valor de e: '));
var f = Number(input('Informe o valor de f: '));
console.log('x = ', (((c * e) - (b * f))/((a * e) - (b * d))), '\ny = ', (((a * f) - (c * d))/((a * e) - (b * d))));*/

// ### QUESTÃO 44 ###
/*var lat = Number(input('Informe uma quantidade de latão em kg: '));
console.log('Essa quantidade de latão é constituida por:\n', ((70 * lat)/100), '(70%) de cobre (Cu)\n', ((30 * lat)/100), '(30%) de zinco (Zn)');*/

// ### QUESTÃO 45 ###       FORMA FACIL / CRIANDO MUITAS VARIAVEIS DESNECESSARIAS
/*var saque = Number(input('Quanto você deseja sacar? '));
var not50 = (saque - saque%50)/50;
var not10 = ((saque - not50 * 50) - (saque - not50 * 50)%10)/10;
var not5 = (saque - (((saque - (not50 * 50 + not10 * 10))%5) + (not10 * 10) + (not50 * 50)))/5;
var not1 = saque - (((saque - (((saque - (not50 * 50 + not10 * 10))%5) + (not10 * 10) + (not50 * 50)))) + (((saque - not50 * 50) - (saque - not50 * 50)%10)) + ((saque - saque%50)))
console.log('Saque realizado com sucesso cédulas sacadas:\n', ((saque - saque%50)/50), 'nota(s) de R$ 50,00\n', (not10), 'nota(s) de R$ 10,00\n', (not5), 'nota(s) de R$ 5,00\n', (not1), 'nota(s) de R$ 1,00');*/

// ### QUESTÃO 45 ###       FORMA "DIFICIL" / ECONOMIZANDO O MAXIMO POSSIVEL
/*
var saque = Number(input('Quanto você deseja sacar? '));
console.log('Saque realizado com sucesso cédulas sacadas:\n', ((saque - saque%50)/50), 'nota(s) de R$ 50,00\n', (((saque - ((saque - saque%50)/50) * 50) - (saque - ((saque - saque%50)/50) * 50)%10)/10), 'nota(s) de R$ 10,00\n', ((saque - (((saque - (((saque - saque%50)/50) * 50 + (((saque - ((saque - saque%50)/50) * 50) - (saque - ((saque - saque%50)/50) * 50)%10)/10) * 10))%5) + ((((saque - ((saque - saque%50)/50) * 50) - (saque - ((saque - saque%50)/50) * 50)%10)/10) * 10) + (((saque - saque%50)/50) * 50)))/5), 'nota(s) de R$ 5,00\n', (saque - (((saque - (((saque - (((saque - saque%50)/50) * 50 + (((saque - ((saque - saque%50)/50) * 50) - (saque - ((saque - saque%50)/50) * 50)%10)/10) * 10))%5) + ((((saque - ((saque - saque%50)/50) * 50) - (saque - ((saque - saque%50)/50) * 50)%10)/10) * 10) + (((saque - saque%50)/50) * 50)))) + (((saque - ((saque - saque%50)/50) * 50) - (saque - ((saque - saque%50)/50) * 50)%10)) + ((saque - saque%50)))), 'nota(s) de R$ 1,00');
*/

// ### QUESTÃO 46 ###
/*var valor = Number(input('Informe o valor da mercadoria: '));
if (valor%3 == 0) {
    console.log('Valor de entrada: R$ ', (valor/3), '\nPrestação 1: R$ ', (valor/3), '\nPrestação 2: R$ ', (valor/3));
} else {
    console.log('Valor de entrada: R$ ', (((valor - valor%3)/3) + (valor%3)), '\nPrestação 1: R$ ', ((valor - valor%3)/3), '\nPrestação 2: R$ ', ((valor - valor%3)/3));
}*/