export function average(randomVar){
    var variance = 0;
    var sum = randomVar.reduce(
        (acc, current) => acc + current,
        0);

    var media = sum/randomVar.length
    randomVar.forEach(e => {       
       variance = variance + Math.pow(media - e,2);
    });

    const averageBlock = document.querySelector('.average');
    const varianceBlock = document.querySelector('.variance');

    averageBlock.innerHTML = `media é ${(sum/randomVar.length).toFixed(3)}`;

    varianceBlock.innerHTML = `a variancia é ${(variance/randomVar.length)}`
}