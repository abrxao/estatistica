export function gerCDF(AleatoryVar, cdfData, initValue, finalValue, qtdOfVariables){
    cdfData = [];

    var intervals = 100;

    var deltaX = (finalValue - initValue)/intervals;
    
    for(var i = 0; i < intervals; i++){
        cdfData.push({
            "indexOfInterval": ((deltaX * (i+1)) + initValue),
            "count": 0,
            "prob": 0
        })
    }
    for(i in AleatoryVar){
        for(var j = intervals-1; j >= 0; j--){            
            if(AleatoryVar[i] > cdfData[j].indexOfInterval - deltaX){
                cdfData[j].count++;
                break;
            }
        }
    }
    for (i in cdfData){

        cdfData[i].prob = cdfData[i].count/qtdOfVariables;
        
    }
    for(var i = 1; i < cdfData.length; i++) {   
        cdfData[i].prob = cdfData[i].prob + cdfData[i-1].prob;        
    }    
    return cdfData;    
}