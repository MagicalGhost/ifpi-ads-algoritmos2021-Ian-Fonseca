const input = require('prompt-sync')();

function main() {
    let i = 1;
    let j = 7;
    let aux = 1;
    
    while(i <= 9) {
        console.log(`I = ${i}   J = ${j}`);
        
        if (aux%3 == 0) {
            i += 2;
            j += 5;
        }

        j--;
        aux++;
    }
}

main();