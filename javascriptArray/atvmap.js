const trainMap = [9,11,12,23]

function multiply (num){
    return num/2
}

const trainMapResult = trainMap.map(multiply);

console.log(trainMapResult);

const trainMap2 = [22,23,25,21]

function subtrate (num){
    return num-5
}

const newNumbers = trainMap2.map(subtrate);

console.log(newNumbers);