export function printCDF(probsOfCDF, valuesOfAxixsXonCDF, cdfGraphic){
    cdfGraphic.innerHTML = '';

    var options2 = {
        chart: {
            type: 'line',
        },
        stroke: {
            curve: 'straight',
            lineCap: 'round',
            colors:'#0Ab68b'
        },
        series: [{
            name: 'probabilidade de ser menor que',
            data: probsOfCDF
        }],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#92de8b','#208174'],
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 1,
                opacityTo: 1,
            },
        },
        xaxis: {
            categories:valuesOfAxixsXonCDF,
        },yaxis:{
            tickAmount: 8,
            min:0,
            max: 1
        },
    }
    
    var chart2 = new ApexCharts(cdfGraphic, options2)
    chart2.render();
}
