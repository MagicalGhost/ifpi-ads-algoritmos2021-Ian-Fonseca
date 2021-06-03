const input = require('prompt-sync')();

var mor = Number(input('Informe a quantidade em Kg de morangos: '));
var mac = Number(input('Informe a quantidade em Kg de maçãs: '));
var valor;
var valort = 0;

if (mor <= 5) {
    valor = mor * 2.5;
    valort += valor;
    console.log('Valor a pagar pelos morangos R$', valor);
} else {
    valor = mor * 2.2;
    valort += valor;
    console.log('Valor a pagar pelos morangos R$', valor);
}
if (mac <= 5) {
    valor = mac * 1.8;
    valort += valor;
    console.log('Valor a pagar pelas maçãs R$', valor);
} else {
    valor = mac * 1.5;
    valort += valor;
    console.log('Valor a pagar pelas maçãs R$', valor);
}
if (valort > 25 || (mac + mor) > 8) {
    console.log('Desconto concedido!');
    valort = valort - valort * 0.1;
    console.log('Novo valor total a se pagar R$', valort)
} else {
    console.log('A compra realizada não atinge o desconto!');
}