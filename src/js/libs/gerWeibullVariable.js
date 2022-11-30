import { gerUniformRandVariable } from "./gerUniformRandVariable";

export function gerWeibullVariable(weibullArray, lambda, beta, qtdOfVariables,){
    var euler = Math.exp(1);
    var array = [];
    
    gerUniformRandVariable(array,0,1,qtdOfVariables);
    var max = -10000000;
    var min = 100000000;
    if(beta <0 || lambda < 0){
        alert("Entre com valores maiores que 0");
    }else{

        var max = []
        for (var i = 0; i < qtdOfVariables; i++) {
            var aux = Math.pow((array[i]/lambda), beta);
            weibullArray.push(Math.pow(euler, aux));
            if(weibullArray[i]>max){
                max = weibullArray[i];
            }else if(weibullArray[i] < min){
                min = weibullArray[i];
            }
        }
    }

    return {
        "min": min,
        "max": max
    }
}
