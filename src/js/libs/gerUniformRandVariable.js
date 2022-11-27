export function gerUniformRandVariable(emptyArray, initValue, finalValue, qtdOfVariables) {
    var range = finalValue - initValue;
    var seed = (new Date().getMilliseconds()) % range;
    emptyArray.push(seed);
    
    var a = range%2 == 0 ? 5: new Date().getMilliseconds();

    for (var i = 0; i < qtdOfVariables-1; i++) {
        seed = ((a * seed  + range/qtdOfVariables) % range)+initValue;
        emptyArray.push(seed);
    }
}