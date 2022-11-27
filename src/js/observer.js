const fieldSetCheck = document.querySelector('fieldset');

const changeFormArea = document.querySelector('.changeFormArea');

changeType();

function changeType(){
    const typOfVariable = fieldSetCheck.querySelector('input:checked');
    if (typOfVariable.value == 'exponential'){
        changeFormArea.innerHTML += `
        <label for="lambda">Valor de λ</label>
        <input type="number" id="lambda" value="3">
        `
    }else{
        changeFormArea.innerHTML = '';
    } 
}

fieldSetCheck.addEventListener('change', (e)=>{
    changeType()
});

