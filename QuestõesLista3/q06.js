const input = require('prompt-sync')();

function main() {
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log('\n');
    }
}

main();