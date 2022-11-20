import {gerUniformRandVariable} from './libs/gerUniformRandVariable'
import {gerHistogram} from './libs/gerHistogram'
import {fillHistogram} from './libs/fillHistogram'

const refreshGraph = document.querySelector('#refreshGraph');
const graph = document.querySelector('.graphArea');
const form  = document.querySelector('form.inputs');

refreshGraph.addEventListener('click', (e) =>{
  
  e.preventDefault();
  var initialValue = parseFloat(form.querySelector('#initialValue').value);
  var finalValue = parseFloat(form.querySelector('#finalValue').value);
  var qtdOfVariables = parseFloat(form.querySelector('#qtdOfVariables').value);
  var intervals = parseFloat(form.querySelector('#intervals').value);
  var uniformRandVariable = [];
  var objHistogram = {
    "qtdOfIntervals":0,
    "arrayIntervals":[]
  }
  gerUniformRandVariable(uniformRandVariable, initialValue, finalValue, qtdOfVariables);
  gerHistogram(intervals, objHistogram, initialValue, finalValue);
  fillHistogram(uniformRandVariable, objHistogram);
  
  var xaxis2 = []; 
  var count = [];
  objHistogram.arrayIntervals.forEach( e => {
    xaxis2.push(`
    ${e.indexOfInterval.toFixed(2).toString()} -
    ${(e.indexOfInterval+((finalValue - initialValue)/intervals)).toFixed(2).toString()}`);
    count.push(e.count/qtdOfVariables); 
  });  
  
  var options = {
    chart: {
      type: 'histogram',
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        borderRadiusApplication: 'end',
        columnWidth: '95%',
      }
    },
    series: [{
      data: count
    }],
    xaxis: {
      categories:xaxis2,
    },yaxis:{
      tickAmount: 8,
      min:0,
      max: 1
    },
    colors: ['#208174', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
  }
  console.log(xaxis2);
  
  setTimeout(() =>{
    graph.innerHTML= '';
    var chart = new ApexCharts(graph, options);
    chart.render();
  },0)  
})


