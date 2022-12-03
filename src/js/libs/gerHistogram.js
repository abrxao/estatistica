export function gerHistogram(intervals, obj, initValue, finalValue){
    var deltaX = (finalValue - initValue)/ intervals;

    for(var i=0; i < intervals; i++){
        obj.arrayIntervals.push({
            "indexOfInterval":deltaX*i + initValue,
            "count":0
        });
        
    }
      
}