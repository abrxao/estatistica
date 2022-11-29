const fieldSetCheck = document.querySelector('fieldset');
const gaussianaInputArea = document.querySelector('.gaussianaInputArea');
const uniformInputArea = document.querySelector('.uniformInputArea')
const exponentialInputArea = document.querySelector('.exponentialInputArea');

changeType();

function changeType(){
    gaussianaInputArea.style.display = 'none';
    const typOfVariable = fieldSetCheck.querySelector('input:checked');
    if (typOfVariable.value == 'exponential'){
        exponentialInputArea.style.display = 'flex';
        uniformInputArea.style.display = 'none';
        gaussianaInputArea.style.display = 'none';

    }else if(typOfVariable.value == 'gaussiana'){
        gaussianaInputArea.style.display = 'flex';
        exponentialInputArea.style.display = 'none';
        uniformInputArea.style.display = 'none';
    }
    else{
        exponentialInputArea.style.display = 'none';
        uniformInputArea.style.display = 'flex';
        gaussianaInputArea.style.display = 'none';
    } 
}

fieldSetCheck.addEventListener('change', (e)=>{
    changeType()
});

