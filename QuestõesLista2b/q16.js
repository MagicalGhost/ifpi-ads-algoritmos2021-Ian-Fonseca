const input = require('prompt-sync')();

var tipo = String(input('Informe o tipo de carne(F - filé; A - alcatra; P - picanha): '));
var kg = Number(input('Informe a quantidade de carne comprada: '));
var pag = Number(input('Informe o tipo de pagamento(0 - pagar com cartão Tabajara; 1 - pagar sem o cartão Tabajara): '));
var valor;

if (pag == 0) {
    if (kg <= 5) {
        if (tipo == 'F' || tipo == 'f') {
            valor = kg * 4.9;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Cartão\nValor do desconto: (5%)', (valor * 0.05), '\nValor a pagar: ', (valor - (valor * 0.05)));
        } else if(tipo == 'A' || tipo == 'a') {
            valor = kg * 5.9;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Cartão\nValor do desconto: (5%)', (valor * 0.05), '\nValor a pagar: ', (valor - (valor * 0.05)));
        } else if(tipo == 'P' || tipo == 'p') {
            valor = kg * 6.9;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Cartão\nValor do desconto: (5%)', (valor * 0.05), '\nValor a pagar: ', (valor - (valor * 0.05)));
        } else {
            console.log('Tipo de carne informada inválida!');
        }
    } else {
        if (tipo == 'F' || tipo == 'f') {
            valor = kg * 5.8;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Cartão\nValor do desconto: (5%)', (valor * 0.05), '\nValor a pagar: ', (valor - (valor * 0.05)));
        } else if(tipo == 'A' || tipo == 'a') {
            valor = kg * 6.8;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Cartão\nValor do desconto: (5%)', (valor * 0.05), '\nValor a pagar: ', (valor - (valor * 0.05)));
        } else if(tipo == 'P' || tipo == 'p') {
            valor = kg * 7.8;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Cartão\nValor do desconto: (5%)', (valor * 0.05), '\nValor a pagar: ', (valor - (valor * 0.05)));
        } else {
            console.log('Tipo de carne informada inválida!');
        }
    }
} else if(pag == 1) {
    if (kg <= 5) {
        if (tipo == 'F' || tipo == 'f') {
            valor = kg * 4.9;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Dinheiro real\nValor do desconto: (0%)', 0, '\nValor a pagar: ', (valor - 0));
        } else if(tipo == 'A' || tipo == 'a') {
            valor = kg * 5.9;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Dinheiro real\nValor do desconto: (0%)', 0, '\nValor a pagar: ', (valor - 0));
        } else if(tipo == 'P' || tipo == 'p') {
            valor = kg * 6.9;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Dinheiro real\nValor do desconto: (0%)', 0, '\nValor a pagar: ', (valor - 0));
        } else {
            console.log('Tipo de carne informada inválida!');
        }
    } else {
        if (tipo == 'F' || tipo == 'f') {
            valor = kg * 5.8;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Dinheiro real\nValor do desconto: (0%)', 0, '\nValor a pagar: ', (valor - 0));
        } else if(tipo == 'A' || tipo == 'a') {
            valor = kg * 6.8;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Dinheiro real\nValor do desconto: (0%)', 0, '\nValor a pagar: ', (valor - 0));
        } else if(tipo == 'P' || tipo == 'p') {
            valor = kg * 7.8;
            console.log('### Cupom Fiscal ###\nTipo de carne: Filé\nQuantidade de carne: ', kg, '\nPreço total: ', valor, '\nTipo de pagamento: Dinheiro real\nValor do desconto: (0%)', 0, '\nValor a pagar: ', (valor - 0));
        } else {
            console.log('Tipo de carne informada inválida!');
        }
    }
} else {
    console.log('Tipo de pagamento informado inválido!');
}