import { average } from "./average";
import { gerUniformRandVariable } from "./gerUniformRandVariable";

export function gerGausVariable(average, variance, qtdOfVariables){
    var a = [];
    var b = [];
    var gaus = [];
    var aux = 0;
    
    for(var i=0; i<12; i++){
        b = [];
        gerUniformRandVariable(b,0,1,qtdOfVariables);
        a.push(b);
    }

    for(var j = 0; j < qtdOfVariables; j++){
        aux = 0;
        for(var i = 0; i<12; i++){
            aux += a[i][j];
        }
        gaus.push(aux - 6);
    }
    var max = gaus[0];
    var min = gaus[0];

    for(var i = 0; i < qtdOfVariables; i++){
        gaus[i] = average + gaus[i]*Math.sqrt(variance);
        if(gaus[i]>max){
            max = gaus[i];
        }else if(gaus[i]<min){
            min = gaus[i];
        }
    }

    return {
        "array": gaus,
        "maxValue": max,
        "minValue": min
    };
    
}