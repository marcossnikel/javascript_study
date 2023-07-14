//Strings
const texto1= "Olá , Mundo !";
const texto2= "Olá , Mundo !";
const senha= "senhaSuperSegura456!";
const stringDeNumeros = "34567";

//Template String // Template Literal //

//Concatenação (+) //
const citacao = 'Meu nome é ';
const meuNome = "Marcos";
console.log( citacao + meuNome );


// Conversão de simbolos e códigos (UTF)//
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Conversao maiusculo , minusculo etc//
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // >>> true

//console.log(cidade === input); >> false

//Número de Caracteres >> length
const senha2 = "minhaSenha123";
console.log(senha2.length); // 13 caracteres