const input = require('prompt-sync')();

function main() {
    let i = 1;
    let j = 7;
    
    while(i <= 9) {
        console.log(`I = ${i}   J = ${j}`);
        
        if (j == 5) {
            i += 2;
            j += 3;
        }

        j--;
    }
}

main();