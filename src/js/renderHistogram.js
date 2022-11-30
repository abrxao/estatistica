import {gerUniformRandVariable} from './libs/gerUniformRandVariable';
import {gerHistogram} from './libs/gerHistogram';
import {fillHistogram} from './libs/fillHistogram';
import {average} from './libs/average';
import {gerCDF} from './libs/gerCDF';
import { printCDF } from './libs/printCDF';
import { printHistogram } from './libs/printHistogram';
import {gerExpVariable} from './libs/gerExpVariable';
import { gerGausVariable } from './libs/gerGausVariable';
import {gerWeibullVariable} from './libs/gerWeibullVariable';

var randomVariable = [];
var cdfData;

const refreshGraph = document.querySelector('#refreshGraph');
const histogramGraphic = document.querySelector('.graphArea');
const cdfGraphic = document.querySelector('.cdfGraphic');

renderAllGraphics();

refreshGraph.addEventListener('click', (e) =>{
  
  e.preventDefault();
  
  renderAllGraphics();
  
  average(randomVariable);
  
});

function renderAllGraphics(){
  
  randomVariable=[];
  cdfData=[];
  
  var objHistogram = {
    "qtdOfIntervals":0,
    "arrayIntervals":[]
  }
  
  const form  = document.querySelector('form.inputs');
  const initialValue = parseFloat(form.querySelector('#initialValue').value);
  const finalValue = parseFloat(form.querySelector('#finalValue').value);
  const qtdOfVariables = parseFloat(form.querySelector('#qtdOfVariables').value);
  const intervals = parseFloat(form.querySelector('#intervals').value);
  const typeOfVariable = form.querySelector("input:checked");
  
  switch(typeOfVariable.value){
    case "uniform":
      gerUniformRandVariable(randomVariable, initialValue, finalValue, qtdOfVariables);
      gerHistogram(intervals, objHistogram, initialValue, finalValue);
      fillHistogram(randomVariable, objHistogram);
      cdfData = gerCDF(randomVariable, cdfData, initialValue, finalValue,qtdOfVariables);
    break;

    case "weibull":
      const lambdaW = parseFloat(document.querySelector('#lambdaW').value);
      const betaW = parseFloat(document.querySelector('#betaW').value);
      var minMax = gerWeibullVariable(randomVariable, lambdaW, betaW, qtdOfVariables);
      gerHistogram(intervals, objHistogram, (minMax.min*0.40), (minMax.max*1.30));
      fillHistogram(randomVariable, objHistogram);
      cdfData = gerCDF(randomVariable, cdfData, (minMax.min*0.93), (minMax.max*1.07) ,qtdOfVariables);
      console.log(cdfData);
    break;

    case "exponential":
      const lambda = parseFloat(form.querySelector("#lambda").value);
      var finalVal = -((1/lambda)*(Math.log(1-0.99954)));
      randomVariable = gerExpVariable(lambda, qtdOfVariables);
      gerHistogram(intervals, objHistogram, 0, finalVal);
      fillHistogram(randomVariable, objHistogram);
      cdfData = gerCDF(randomVariable, cdfData, 0, finalVal,qtdOfVariables);
    break;

    case "gaussiana":
      const variance2 = parseFloat(form.querySelector("#variance").value);
      const average2 = parseFloat(form.querySelector("#average").value);

      var aux = gerGausVariable(average2, variance2,qtdOfVariables);

      randomVariable = aux.array;
      gerHistogram(intervals, objHistogram, aux.minValue , aux.maxValue);

      fillHistogram(randomVariable, objHistogram);
      cdfData = gerCDF(randomVariable, cdfData, aux.minValue , aux.maxValue,qtdOfVariables);
    break;

    default:
  }

  var valuesOfAxixsX = []; 
  var count = [];
  var valuesOfAxixsXonCDF = [initialValue];
  var countOfCDF = [0];
  
  setTimeout(() =>{    
    objHistogram.arrayIntervals.forEach(e => {
      valuesOfAxixsX.push(`
      ${e.indexOfInterval.toFixed(2).toString()} -
      ${(e.indexOfInterval+((finalValue - initialValue)/intervals)).toFixed(2).toString()}`);
      count.push(e.count/qtdOfVariables); 
    });
    
    cdfData.forEach(e => {
      valuesOfAxixsXonCDF.push(`
      ${e.indexOfInterval.toFixed(2)}`);
      
      countOfCDF.push(e.prob.toFixed(4));
    });
    
    printHistogram(count, valuesOfAxixsX, histogramGraphic);
    
    printCDF(countOfCDF,valuesOfAxixsXonCDF,cdfGraphic);
    
  },0);
  
}

