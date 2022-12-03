const fieldsetCheck = document.querySelector('.fieldsetParemeters');
const gaussianaInputArea = document.querySelector('.gaussianaInputArea');
const uniformInputArea = document.querySelector('.uniformInputArea')
const exponentialInputArea = document.querySelector('.exponentialInputArea');
const weibullInputArea = document.querySelector('.weibullInputArea') 
const explainParameters = document.querySelector('.explainParameters');

changeType();

function changeType(){
    gaussianaInputArea.style.display = 'none';
    const typOfVariable = fieldsetCheck.querySelector('input:checked');
    if (typOfVariable.value == 'exponential'){
        exponentialInputArea.style.display = 'flex';
        uniformInputArea.style.display = 'none';
        gaussianaInputArea.style.display = 'none';
        weibullInputArea.style.display = 'none';
        
        explainParameters.innerHTML = `
        <h2>Variavel Exponencial</h2><br>
        <p>
        Uma variável com distribuição exponencial pode ser gerada a partir de uma variável aleatória entre 0 e 1. Para isso, basta aplicar a inversa da CDF em ‘x’ da variável uniforme <code>
        expArray.push(-(( 1/λ ) * ( Math.log( 1-a[i] ) )))
        </code>
        onde ‘expArray’ é o vetor que armazena todas as variáveis aleatórias exponenciais. E <code> push() </code> é a função responsável por alocar o resultado dessa transformação no vetor. <code> -(1/λ)*(Math.log(1-a[i]))  </code> é a equação que gera qualquer variável exponencial a partir de uma uniforme. Onde< code> Math.log(1-a[i])</code> usa o valor da variável uniforme e calcular o log e <code> -(1/λ) </code> é o parâmetro que regula o comportamento da sua distribuição. Valores de λ muito altos a sua densidade se aproxima de 0.
        <br><br>
        A variância e media estão muito próximas dos valores estimados com uma margem de erro mínima, isso é de esperado devido a quantidade de números aleatoriamente gerados.
        </p>
        `
        
    }else if(typOfVariable.value == 'gaussiana'){
        gaussianaInputArea.style.display = 'flex';
        exponentialInputArea.style.display = 'none';
        uniformInputArea.style.display = 'none';
        weibullInputArea.style.display = 'none';
        
        explainParameters.innerHTML = `
        <h2>Variavel Gaussiana</h2><br>
        <p>
        Primeiro tenho o vetor b responsável por receber as 12 variáveis aleatórias geradas para forma uma distribuição gaussiana. O vetor a recebe os valores de b formando uma matriz<sub>12x10000</sub> e após isso somo os valores de cada índice de coluna de todas as 12 variáveis uniformes e coloco essa soma no mesmo índice do vetor <code>gaus[]</code> para em seguida transformar o vetor com a equação <code>
        gaus[i] = average + gaus[i] * Math.sqrt(variance)
        </code>. Com isso, é possível calcular qualquer variável de distribuição gaussiana a partir da sua média e variância. <br><br>
        A variância e media estão muito próximas dos valores estimados com uma margem de erro mínima, isso é de esperado devido a quantidade de números aleatoriamente gerados.

        </p>
        `
    }
    else if(typOfVariable.value == 'weibull'){
        weibullInputArea.style.display = 'flex';
        gaussianaInputArea.style.display = 'none';
        exponentialInputArea.style.display = 'none';
        uniformInputArea.style.display = 'none';
        
        explainParameters.innerHTML = `
        <h2>Variavel de distribuição Weibull</h2><br>
        <p>
        Para gerar essa variável aleatória foi preciso calcular a CDF<sup>-1</sup> e aplica em uma variável aleatória uniforme entre 0 e 1. 
        Primeiro calculei o log de x<sub>i</sub> com a função <code>
        -1 * Math.log(array[i])
        </code> em seguida coloquei o ln (x<sub>i</sub>) na função <code> aux = Math.pow(lnX, 1/beta)</code> que calcula qualquer valor da raiz dada por β e por último com o método <code> weibullArray.push(λ * aux) </code>.

        <br><br>
        A variância e media estão muito próximas dos valores estimados com uma margem de erro mínima, isso é de esperado devido a quantidade de números aleatoriamente gerados.

        </p>
        `
        
    }
    else{
        exponentialInputArea.style.display = 'none';
        uniformInputArea.style.display = 'flex';
        gaussianaInputArea.style.display = 'none';
        weibullInputArea.style.display = 'none';
        
        explainParameters.innerHTML = `
        <h2>Variavel Uniforme</h2><br>
        <p>
        Usando o método congruêncial de geração de variável aleatória uniforme é seguindo seguintes parâmetros abaixo é possível gerar qualquer variável aleatória uniforme: 
        <code>
        seed = ((a * seed + c) % mod)
        </code> onde 13 foi o melhor valor para 'a' encontrado para evitar valores cíclicos das variáveis. A escolha aleatória da <code>seed
        </code> foi dada por uma função nativa do JavaScript. E o valor do modulo, como visto em aula, foi um valor inteiro suficientemente grande para evitar valores cíclicos e menor que 2<sup>64</sup> tornando o algoritmo menos pesado. O valor de 'c' também foi escolhido aleatoriamente sendo menor que o valor do modulo.
        <br><br>
        
        E por último a função abaixo responsável por gerar variáveis aleatórias de qualquer valor.
        <code>
        emptyArray.push((( seed * range ) / mod) + initValue )
        </code> em que ‘range’ é o intervalo da variável e ‘initiValue’ é onde a variável começa seu intervalo.
        <br><br>
        A variância e media estão muito próximas dos valores estimados com uma margem de erro mínima, isso é de esperado devido a quantidade de números aleatoriamente gerados.

        </p>
        `
    } 
}

fieldsetCheck.addEventListener('change', (e)=>{
    changeType()
});

