const input = require('prompt-sync')();

function main() {
    let nome = String(input('Informe o nome da candidata: '));
    let altura = String(input('Informe a altura da candidata: '));
    let peso = String(input('Informe o peso da candidata: '));

    let altan = 0;
    let altah = 0;
    let baixan = 0;
    let baixah = 100000000000;
    let gordan = 0;
    let gordap = 0;
    let magran = 0;
    let magrap = 100000000000;

    while(nome != "FIM" && nome != "fim") {
        if (altura >= altah) {
            altah = altura;
            altan = nome;
        }
        if (altura <= baixah) {
            baixah = altura;
            baixan = nome;
        }

        if (peso >= gordap) {
            gordap = peso;
            gordan = nome;
        }
        if (peso <= magrap) {
            magrap = peso;
            magran = nome;
        }

        nome = String(input('Informe o nome da candidata: '));
        altura = String(input('Informe a altura da candidata: '));
        peso = String(input('Informe o peso da candidata: '));
    }

    console.log(`================================\nCandidata mais alta:\nNome - ${altan}\nAltura - ${altah}\nCandidata mais baixa:\nNome - ${baixan}\nAltura - ${baixah}\n\nCandidata mais gorda:\nNome - ${gordan}\nPeso - ${gordap}\nCandidata mais magra:\nNome - ${magran}\nPeso - ${magrap}`);

}

main();