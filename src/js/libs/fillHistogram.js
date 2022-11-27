export function fillHistogram(AleatoryVar, Histogram){
    for(var i = 0; i < AleatoryVar.length; i++){
        for(var j = Histogram.arrayIntervals.length; j>=1; j--){
            if(Histogram.arrayIntervals[j-1].indexOfInterval <= AleatoryVar[i]){
                Histogram.arrayIntervals[j-1].count += 1;
                break;
            }
        }
    }
}