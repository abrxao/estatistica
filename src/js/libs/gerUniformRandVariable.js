function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function gerUniformRandVariable(emptyArray, initValue, finalValue, qtdOfVariables) {

    var range = finalValue - initValue;
    var mod = 10000000000;
    var seed = getRandomInt(0, mod);
    
    var a = getRandomInt(0, mod - 100);
    var c = getRandomInt(0, mod - 10000);

    for (var i = 0; i < qtdOfVariables; i++) {

        seed = ((a * seed  + c) % mod);

        emptyArray.push(((seed*range)/mod)+initValue);
    }
}