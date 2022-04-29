//Contatenação de Strings
//const apresentacao =" Mueu nome é " + nome + ", minha idade é " + idade +", e nasci na cidade de " + cidadeNascimento;
// Template String > ${} ;;
//const nome = "Marko";
//const idade = 2022-2002;
//const cidadeNascimento = "Jundiai";
//const apresentacao =`Meu nome é ${nome}, minha idade é ${idade}, e nasci na cidade de ${cidadeNascimento}`;
//console.log(apresentacao)






const nome = "Marcos";
const idade = 17;
const bebidaMaior = "Cerveja";
const bebidaMenor = "Coca";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)


const tempoTrabalho =50;
const meuTempoTrabalho = 49;
console.log(meuTempoTrabalho >= tempoTrabalho ? "Você pode se aposentar" : "Você ainda não pode se aposentar");


//if (meuTempoTrabalho >= tempoTrabalho ){
  //  console.log("Você pode aposentar!!");
//} else {
  //  console.log(" Você ainda não pode se aposentar");
//}

