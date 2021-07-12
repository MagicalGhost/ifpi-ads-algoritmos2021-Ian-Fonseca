function mediaValores(v){
    let media = 0;

    for (let i = 0; i < v.length; i++) {
        media += v[i];
    }

    media = media/v.length;
    return media;
}

function maiorValor(v) {
    //return Math.max.apply(null, v); // Jeito mais facil que achei de fazer

    let maior = v[0];

    for (let i = 0; i < v.length; i++) {
        if (v[i] > maior) {
            maior = v[i];
        }
    }
    return maior;
}

function menorValor(v) {
    //return Math.min.apply(null, v); // Jeito mais facil que achei de fazer

    let menor = v[0];

    for (let i = 0; i < v.length; i++) {
        if (v[i] < menor) {
            menor = v[i];
        }
    }
    return menor;
}

function qtddPositivos(v) {
    let positivos = 0;

    for (let i = 0; i < v.length; i++) {
        if (v[i] > 0) {
            positivos++;
        }
    }

    return positivos;
}

function qtddNegativos(v) {
    let negativos = 0;

    for (let i = 0; i < v.length; i++) {
        if (v[i] < 0) {
            negativos++;
        }
    }

    return negativos;
}

function repetidos(v) {

    for (let i = 0; i < v.length; i++) {
        for (let j = 0; j < v.length; j++) {
            if ((i != j) && (v[i] == v[j])) {
                return true;
            } else {
                return false;
            }
            
        }
    }

}

module.exports = {
    mediaValores,
    maiorValor,
    menorValor,
    qtddPositivos,
    qtddNegativos,
    repetidos
}