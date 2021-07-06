function newArray(n, m){
    const matriz = Array(n);
    
    for (let i = 0; i < n; i++){
        matriz[i] = Array(m);
    }

    return matriz;
}

module.exports = {
    newArray
}