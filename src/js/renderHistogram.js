import {gerUniformRandVariable} from './libs/gerUniformRandVariable';
import {gerHistogram} from './libs/gerHistogram';
import {fillHistogram} from './libs/fillHistogram';
import {average} from './libs/average';
import {gerCDF} from './libs/gerCDF';
import { printCDF } from './libs/printCDF';
import { printHistogram } from './libs/printHistogram';
import {gerExpVariable} from './libs/gerExpVariable';

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

    case "exponential":
      const lambda = parseFloat(form.querySelector("#lambda").value);
      var finalVal = -((1/lambda)*(Math.log(1-0.99954)));
      randomVariable = gerExpVariable(lambda, qtdOfVariables);
      gerHistogram(intervals, objHistogram, 0, finalVal);
      fillHistogram(randomVariable, objHistogram);
      cdfData = gerCDF(randomVariable, cdfData, 0, finalVal,qtdOfVariables);
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

