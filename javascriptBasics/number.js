//Tipo Number

const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)

//Ponto Flutuante

const numeroPontoFlutuante = 3.3;

const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

//NaN -> Not a Number

const alura = "Alura";

console.log(alura * primeiroNumero);

//Ordenação de números

function comparaNumeros(a,b) { if(a ==b) return 0; if (a<b) return -1; if (a>b) return 1;}

var lista =[10, 1, 5, 9 ,8, 12, 15];

//lista.sort(comparaNumeros);
lista.sort((a,b) => a - b);
console.log(lista);

//Simplificando !!

//Testes
const diasDosMeses = 30
const meses = 12
const diasDoAno = (diasDosMeses * meses) + 5;

console.log(diasDoAno);

const diasAteAgora = 30*2;
const diasDeMarço = 17;
const diasAteOFimDoAno = 365 - (diasAteAgora + diasDeMarço);

console.log(diasAteOFimDoAno);