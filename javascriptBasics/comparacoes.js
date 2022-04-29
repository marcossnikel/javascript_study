// 2 (=) ; Comparação Implícita
// Com 2 Iguais ele converte string pra numero e vice versa, focando apenas no valor que está dentro

const numero = 5;
const texto = "5";

console.log(numero === Number(texto));


//typeof - tipo de dado que  está sendo salvo na variável

console.log(typeof numero);
console.log(typeof texto);

// == só compara o valor
// === compara o valor e o tipo de dado


// Adequavel - Conversão Explícita

Number()
String()