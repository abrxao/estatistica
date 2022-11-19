export function gerHistogram(interval, obj, initValue, finalValue){
    obj.intervalValue = (finalValue - initValue)/ interval;
    for(var i=0; i< interval; i++){
        obj.arrayIntervals.push({
            "indexOfInterval":obj.intervalValue*i + initValue,
            "count":0
        });
    }    
}