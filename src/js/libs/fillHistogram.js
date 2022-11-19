export function fillHistogram(AleatoryVar, Histogram){
    for(let i = 0; i < AleatoryVar.length; i++){
        for(let j = Histogram.arrayIntervals.length; j>0; j--){
            if(Histogram.arrayIntervals[j-1].indexOfInterval <= AleatoryVar[i]){
                Histogram.arrayIntervals[j-1].count++;
                break;
            }
        }
    }
}