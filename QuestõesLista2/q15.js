const input = require('prompt-sync')();

var hap1 = Number(input('Informe a quantidade de horas aula do primeiro professor: '));
var hap2 = Number(input('Informe a quantidade de horas aula do segundo professor: '));
var vph1 = Number(input('Informe o valor por hora do primeiro professor: '));
var vph2 = Number(input('Informe o valor por hora do segundo professor: '));
var salarioTotalProfessor1 = hap1 * vph1;
var salarioTotalProfessor2 = hap2 * vph2;

if (salarioTotalProfessor1 > salarioTotalProfessor2) {
    console.log('O salário total do primeiro professor é maior que o do segundo professor!');
} else if(salarioTotalProfessor2 > salarioTotalProfessor1) {
    console.log('O salário total do segundo professor é maior que o do primeiro professor!');
} else {
    console.log('Sálarios iguais!');
}