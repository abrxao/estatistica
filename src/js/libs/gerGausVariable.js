import { average } from "./average";
import { gerUniformRandVariable } from "./gerUniformRandVariable";

export function gerGausVariable(average, variance, qtdOfVariables){
    var a = [];
    var b = [];
    var c = [];
    var aux = 0;
    
    for(var i=0; i<12; i++){
        b=[];
        gerUniformRandVariable(b,0,1,qtdOfVariables);
        a.push(b);
    }

    for(var j = 0; j < qtdOfVariables; j++){
        aux = 0;
        for(var i = 0; i<12; i++){
            aux += a[i][j];
        }
        c.push(aux - 6);
    }
    var max = c[0];
    var min = c[0];
    for(var i = 0; i < qtdOfVariables; i++){
        c[i] = average + c[i]*Math.sqrt(variance);
        if(c[i]>max){
            max = c[i];
        }else if(c[i]<min){
            min = c[i];
        }
    }

    return {
        "array": c,
        "maxValue": max,
        "minValue": min
    };
    
}