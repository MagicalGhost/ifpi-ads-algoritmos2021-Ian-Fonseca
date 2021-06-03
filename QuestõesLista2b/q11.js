const input = require('prompt-sync')();

var num = Number(input('Informe um valor: '));
var uni = num%10;
var dez = (num%100 - uni)/10;
var cen = (num - (uni + (dez * 10)))/100;

if (num >= 1000) {
    console.log('O valor deve ser menor que 1000');
} else {
    if (cen == 0) {
        if (dez == 0) {
            if (uni == 0) {
                console.log('Número 0');
            } else if(uni == 1) {
                console.log(uni, 'unidade');
            } else {
                console.log(uni, 'unidades');
            }
        } else if(dez == 1) {
            if (uni == 0) {
                console.log(dez, 'dezena', uni, 'unidades');
            } else if(uni == 1) {
                console.log(dez, 'dezena', uni, 'unidade');
            } else {
                console.log(dez, 'dezena', uni, 'unidades');
            }
        } else {
            if (uni == 0) {
                console.log(dez, 'dezenas', uni, 'unidades');
            } else if(uni == 1) {
                console.log(dez, 'dezenas', uni, 'unidade');
            } else {
                console.log(dez, 'dezenas', uni, 'unidades');
            }
        }
    } else if(cen == 1) {
        if (dez == 0) {
            if (uni == 0) {
                console.log(cen, 'centena', dez, 'dezenas', uni, 'unidades');
            } else if(uni == 1) {
                console.log(cen, 'centena', dez, 'dezenas', uni, 'unidade');
            } else {
                console.log(cen, 'centena', dez, 'dezenas', uni, 'unidade');
            }
        } else if(dez == 1) {
            if (uni == 0) {
                console.log(cen, 'centena', dez, 'dezena', uni, 'unidades');
            } else if(uni == 1) {
                console.log(cen, 'centena', dez, 'dezena', uni, 'unidade');
            } else {
                console.log(cen, 'centena', dez, 'dezena', uni, 'unidades');
            }
        } else {
            if (uni == 0) {
                console.log(cen, 'centena', dez, 'dezenas', uni, 'unidades');
            } else if(uni == 1) {
                console.log(cen, 'centena', dez, 'dezenas', uni, 'unidade');
            } else {
                console.log(cen, 'centena', dez, 'dezenas', uni, 'unidades');
            }
        }
    } else {
        if (dez == 0) {
            if (uni == 0) {
                console.log(cen, 'centenas', dez, 'dezenas', uni, 'unidades');
            } else if(uni == 1) {
                console.log(cen, 'centenas', dez, 'dezenas', uni, 'unidade');
            } else {
                console.log(cen, 'centenas', dez, 'dezenas', uni, 'unidade');
            }
        } else if(dez == 1) {
            if (uni == 0) {
                console.log(cen, 'centenas', dez, 'dezena', uni, 'unidades');
            } else if(uni == 1) {
                console.log(cen, 'centenas', dez, 'dezena', uni, 'unidade');
            } else {
                console.log(cen, 'centenas', dez, 'dezena', uni, 'unidades');
            }
        } else {
            if (uni == 0) {
                console.log(cen, 'centenas', dez, 'dezenas', uni, 'unidades');
            } else if(uni == 1) {
                console.log(cen, 'centenas', dez, 'dezenas', uni, 'unidade');
            } else {
                console.log(cen, 'centenas', dez, 'dezenas', uni, 'unidades');
            }
        }
    }
}