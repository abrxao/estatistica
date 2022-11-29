export function printHistogram(probsOfIntervals, valuesOfAxixsX, graphicArea ){
  var maxProb = probsOfIntervals[0];
  graphicArea.innerHTML = '';

  for(var x of probsOfIntervals) {
    if(x > maxProb) {
      maxProb = x;
    }
  }

  var options = {
        chart: {
          type: 'histogram',
          redrawOnParentResize: false
        },
        plotOptions: {
          bar: {
            borderRadius: 3,
            borderRadiusApplication: 'end',
            columnWidth: '85%',
          }
        },
        dataLabels: {
          enabled: false
        },
        series: [{
          data: probsOfIntervals
        }],
        xaxis: {
          categories:valuesOfAxixsX,
        },yaxis:{
          tickAmount: 4,
          min:0,
          max: (maxProb*1.2)
        },
        colors: ['#208174', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
      }
      
      var chart = new ApexCharts(graphicArea, options);
      chart.render();
      
}