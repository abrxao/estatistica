import { gerUniformRandVariable } from "./gerUniformRandVariable";

export function gerWeibullVariable(weibullArray, lambda, beta, qtdOfVariables,){
    var array = [];

    gerUniformRandVariable(array,0,1,qtdOfVariables);

    var max = -10000000;
    var min = 10000000;

    if(beta <0 || lambda < 0){
        alert("Entre com valores maiores que 0");
    } else {

        var max = []
        var lnX = 0;
        for (var i = 0; i < qtdOfVariables; i++) {
            lnX = -1 * Math.log(array[i]);
            var aux = Math.pow(lnX, 1/beta);
            //var aux = Math.pow(Math.log(array[i]), 1/beta);
            weibullArray.push(lambda * aux);

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
