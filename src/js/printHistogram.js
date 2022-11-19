import {gerUniformRandVariable} from './libs/gerUniformRandVariable'
import {gerHistogram} from './libs/gerHistogram'
import {fillHistogram} from './libs/fillHistogram'

var UniformRandVariable = [];
gerUniformRandVariable(UniformRandVariable, 4, 12,10000)

var objHistogram = {
    "intervalValue":0,
    "arrayIntervals":[]
}
gerHistogram(8, objHistogram, 4, 12);

fillHistogram(UniformRandVariable, objHistogram);

console.log(objHistogram)

var xaxis2 = []; 
var count = [];
objHistogram.arrayIntervals.forEach( e => {
   xaxis2.push(e.indexOfInterval);
   count.push(e.count/10000); 
});
console.log(xaxis2)

const graph = document.querySelector('.graphArea')

var options = {
    chart: {
      type: 'histogram',
      width: 550
    },
    series: [{
      data: count
    }],
    xaxis: {
      categories:xaxis2
    },yaxis:{
        tickAmount: 8,
        min:0,
        max: 1
    }
  }
  
var chart = new ApexCharts(graph, options);

chart.render();
