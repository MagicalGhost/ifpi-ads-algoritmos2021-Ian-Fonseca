const input = require('prompt-sync')();
var dias = Number(input('Informe um valor de dias: '));
var anos = ((dias - dias%365)/365);
var mes = ((dias - ((dias - dias%365) + ((dias%365)%30)))/30);
var dia = ((dias%365)%30);
console.log(anos, ' ano(s) ', mes, ' mes(es) ', dia, ' dia(s)');