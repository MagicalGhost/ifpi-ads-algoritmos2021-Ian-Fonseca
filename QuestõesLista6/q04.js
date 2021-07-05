const input = require('prompt-sync')()

function main() {
    let n = Number(input('Informe um valor para N: '));
    let a = Array(n);
    let b = Array(n);

    for (let i = 0; i < a.length; i++) {
        a[i] = input('Informe um valor para A: ');
    }

    for (let i = 0; i < b.length; i++) {
        b[i] = input('Informe um valor para B: ');
    }

    let c = uniao(a.concat(b));

    for (let i = 0; i < c.length; i++) {
        console.log(`C[${i}] = ${c[i]}`);
    }

    let d = interseccao(a, b);

    for (let i = 0; i < d.length; i++) {
        console.log(`D[${i}] = ${d[i]}`);
    }
}

function uniao(array) {
    let a = array.concat();

    for(let i = 0; i < a.length; ++i) {
        for(let j = i + 1; j  < a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

function interseccao(a, b) {
    let d = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if ((i != j) && (a[i] == b[j])) {
                d.push(a[i]);
            }
            
        }
    }
    return d;
}

main();