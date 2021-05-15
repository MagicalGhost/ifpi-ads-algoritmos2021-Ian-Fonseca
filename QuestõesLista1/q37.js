const input = require('prompt-sync')();
var dias = Number(input('Informe um valor de dias: '));
console.log('A quantidade informada é equivalente a: ', ((dias - dias%365)/365), ' ano(s) ', ((dias - ((dias - dias%365) + ((dias%365)%30)))/30), ' mes(es) ', ((dias%365)%30), ' dia(s)');