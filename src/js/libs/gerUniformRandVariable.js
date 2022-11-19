export function gerUniformRandVariable(emptyArray, initValue, finalValue, qtdOfVariables) {
    var seed = new Date().getMilliseconds();
    var range = finalValue - initValue;
    emptyArray.push((seed % range) + 4);
    
    for (var i = 0; i < qtdOfVariables; i++) {
        seed = ((5 * (seed % range) + .008) % range) + initValue;
        emptyArray.push(seed);
    }
}