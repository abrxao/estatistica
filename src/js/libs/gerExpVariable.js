import { gerUniformRandVariable } from "./gerUniformRandVariable";

export function gerExpVariable(lambda, qtdOfVariables){
    var a = [];
    gerUniformRandVariable(a,0,1,qtdOfVariables);
    
    var expArray = [];
    
    for(var i = 0; i < qtdOfVariables; i++){
        expArray.push(-((1/lambda)*(Math.log(1-a[i]))));
    }

    return expArray;
}


