function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function gerUniformRandVariable(emptyArray, initValue, finalValue, qtdOfVariables) {

    var range = finalValue - initValue;
    var mod = 10000000000;
    var seed = getRandomInt(0, mod);
    var c = getRandomInt(0, 1000000);

    emptyArray.push(((seed*range)/mod)+initValue);

    for (var i = 0; i < qtdOfVariables-1; i++) {

        seed = ((13 * seed  + c) % mod);

        emptyArray.push(((seed*range)/mod)+initValue);
    }
}