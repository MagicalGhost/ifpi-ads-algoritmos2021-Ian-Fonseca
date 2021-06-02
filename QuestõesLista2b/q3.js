const input = require('prompt-sync')();

var letra = String(input('Informe uma letra: '));

if (letra == 'A' || letra == 'a' || letra == 'E' || letra == 'e' || letra == 'I' || letra == 'i' || letra == 'O' || letra == 'o' || letra == 'U' || letra == 'u') {
    console.log('É vogal!');
} else {
    console.log('É consoante!');
}