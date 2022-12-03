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
          height: window.innerWidth < 768 ? '300':'auto'  
        },
        title: {
          text: 'Densidade de probabilidade',
          align: 'center',
          margin: 10,
          floating: false,
          style: {
            fontSize:  '20px',
            fontWeight:  'bold',
            fontFamily:  'Raleway',
            color:  '#e9eef4'
          },
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
          name: 'Probabilidade',  
          data: probsOfIntervals
        }],
        xaxis: {
          tickAmount: window.innerWidth < 768 ? 6:10,
          categories:valuesOfAxixsX,
          labels:{
            style: {
              colors: '#e9eef4'  
            }            
        }
        },yaxis:{
          tickAmount: 4,
          min:0,
          max: (maxProb*1.1),
          labels:{
            style: {
              colors: '#e9eef4'  
            }
            
        }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              gradientToColors: ['#e65c4f'],
              shadeIntensity: 1,
              type: 'vertical',
              opacityFrom: 1,
              opacityTo: 1,
          },
      },
        colors: '#dd9f82',
      }
      
      var chart = new ApexCharts(graphicArea, options);
      chart.render();
      
}