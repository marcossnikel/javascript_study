//usual
function apresentar (nome){
    return `meu nome é ${nome}`;
}
//Arrow Function
const arrowFunction = nome => `meu nome é ${nome}`;
const soma = (num1 , num2) => num1 + num2;

//Arrow Function com mais de uma linha]

const somaNumerosPequenos = (num1 , num2 ,num3) => {
    if (num1 || num2 || num3 > 10){
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2 + num3;
    }
}

//Hoisting - Arrow se comporta da mesma forma que é a expressão
