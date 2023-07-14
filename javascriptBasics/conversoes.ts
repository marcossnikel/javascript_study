// tipo de dado
// booleanos

// Conversão implícita - Converte um dado em outro ex:
// String em numero , vice versa

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
console.log(numero + numeroString);

//Number()
//String()
//Conversão Explícita

console.log(numero + Number(numeroString))

let meuTelefone = 944712081;
console.log("O meu telefone é " + String(meuTelefone)); 
console.log("Muito prazer ,pode me chamar se precisar");

// teremos a conversão do número 12341234 para uma 
//string “12341234” e assim poderemos fazer a 
//concatenação entre as strings


let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado));
usuarioConectado= true;
console.log(String(usuarioConectado));

 // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

 // agora teremos uma string “true”.

 
 // Vamos calcular a área de um retângulo
//let largura = "10";
//let altura = "5";
//console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

//NÃO UTILIZAR ESSES TERMOS EM NOMES DE VARIÁVEIS
//arguments
//as
//async
//await
//break
//case
//catch
//class
//const
//continue
//debugger
//default
//delete
//do
//else
//eval
//export
//extends
//false
//finally
//for
//from
//function
//get
//if
//import
//in
//instanceof
//let
//of
//new
//null
//return
//set
//static
//super
//switch
//target
//this
//throw
//true
//try
//typeof
//var
//void
//while
//with
//yield
//enum
//implements
//interface
//package
//private
//protected
//public