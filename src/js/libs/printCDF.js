export function printCDF(probsOfCDF, valuesOfAxixsXonCDF, cdfGraphic){
    cdfGraphic.innerHTML = '';

    var options2 = {
        chart: {
            type: 'line',
            height: window.innerWidth < 768 ? '300':'auto'  
        },
        title: {
            text: 'Cumulativa de probabilidade',
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
        stroke: {
            curve: 'straight',
            lineCap: 'round',
            colors:'#dd9f82'
        },
        series: [{
            name: 'Probabilidade',
            data: probsOfCDF
        }],
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
        xaxis: {
            type: 'probabilidade de ser menor que',
            tickAmount: window.innerWidth < 768 ? 8:12,
            categories:valuesOfAxixsXonCDF,
            labels:{
                style: {
                  colors: '#e9eef4'  
                }
                
            }
        },yaxis:{
            tickAmount: 8,
            min:0,
            max: 1,
            labels:{
                style: {
                  colors: '#e9eef4'  
                }
                
            }
        },
    }
    
    var chart2 = new ApexCharts(cdfGraphic, options2)
    chart2.render();
}
