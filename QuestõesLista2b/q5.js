const input = require('prompt-sync')();

var preco1 = Number(input('Informe o preço do primeiro produto: '));
var preco2 = Number(input('Informe o preço do segundo produto: '));
var preco3 = Number(input('Informe o preço do terceiro produto: '));

if (preco1 <= preco2 && preco1 <= preco3) {
    console.log('Primeiro produto mais barato!');
} else if(preco2 <= preco1 && preco2 <= preco3) {
    console.log('Segundo produto mais barato!');
} else {
    console.log('Terceiro produto mais barato!');
}