const input = require('prompt-sync')();
var anos = Number(input('Informe a quantos anos você fuma: '));
var num = Number(input('Informe quantos cigarros você fuma por dia: '));
var preco = Number(input('Informe o preço de uma carteira de cigarro: '));
if((anos * 365 * num)%20 == 0) {
    console.log('Você já gastou um total de R$', (((anos * 365 * num)/20) * preco), ' com cigarros!\nPare de fumar imediatamente, fumar faz mal pra saúde, o Ministério da Saúde adverte!');
} else {
    console.log('Você já gastou um total de R$', (((((anos * 365 * num) - (anos * 365 * num)%20)/20) * preco) + preco), ' com cigarros!\nPare de fumar imediatamente, fumar faz mal pra saúde, o Ministério da Saúde adverte!');
}