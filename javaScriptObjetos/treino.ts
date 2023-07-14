//Acessar Dados
//const cliente = {
  //  nome: "Marcos",
  //  idade : 20,
   // cpf: "123456789",
   // email : "marcos@gmail.com"
//}


//console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos, meu cpf é ${cliente.cpf}`)

//console.log(cliente.cpf.substring(0,3))

//Acessar dados com chave. 
//const ingresso = {
  //  nome : "Circo do seu Léo",
  //  valor : "R$20,00",
  //  duracao : "2H",
   // alimentacao :"Apenas compra no local"
//}

//const dadosIngresso = ["nome","valor","duracao","alimentacao"]

//dadosIngresso.forEach(dadosParaOIngresso => console.log(ingresso[dadosParaOIngresso]));


//Adicionando e Alterando o Objeto

//const peterParker = {
  //  trabalho : "Homem Aranha",
  //  identidade :"Secreta",
  //  tia : "May",
  //  namorada : "Mary Jane",
  //  rg : "56312312-5"
//}

//const exibePeter = ["trabalho","identidade","tia","namorada","rg"]

//exibePeter.forEach(homemAranha => console.log(peterParker[homemAranha]));

//peterParker.amigo = "James"

//console.log(peterParker)
//peterParker.amigo = "Nolan"
//console.log(peterParker)


//Acessar dados com mais de uma informação


//const campeonato = {
  //  local : "Morumbi",
  //  times :"São Paulo e Corinthians",
   // horaio : "20:00",
   // confronto : "Final",
   // valores : ["50","80","120"]
//}

//campeonato.valores.forEach(valor => console.log(valor))
//console.log(campeonato)

//Objeto em Objeto

//const dados = {
   // nome: "Marcos",
   // idade:20,
   // formacao :"Graduando em Ciência da Computação",
   // areaDeInteresse : "Back-End - Node.JS"
//}

//dados.extra = {
  //  game :"Jogar LostArk",
  //  assistir : "One Piece"
    
//}


//console.log(dados)


//Lista de Objetos

//const dados = {
   // nome: "Marcos",
   // idade:20,
   // formacao :"Graduando em Ciência da Computação",
    //areaDeInteresse : "Back-End - Node.JS",
     //   extra : [{
      //      game :"Jogar LostArk",
       //     assistir : "One Piece",
       //     meta : "KAIZOKU ONI OREWANARU",
   // }]
//}
    
//dados.extra.push({
  //  game : "Descansar",
  //  meta: "se tornar um programador foda",
  //  assistir : "O JOGO",
//})


//const tente = dados.extra.filter(hahaha => hahaha.assistir === "O JOGO")

//console.log(tente[0].assistir)

//const cliente = {
   /// nome: "Marcos",
    //idade : 20,
    //cpf: "123456789",
    //email : "marcos@gmail.com",
      //  extra : [{
        //    ama : "jugar",
        //    como : "volei",
        //}]
//}


//cliente.extra.push({
 //   ama : "jogar",
  //  como : "no computador",
//}
//)

//const newDadosCliente = cliente.extra.filter(dadosExtra => dadosExtra.ama === "jogar")

//console.log(newDadosCliente[0].ama)


//Function Objetos

const cliente = {
    nome: "Marcos",
    idade : 20,
    cpf: "123456789",
    email : "marcos@gmail.com",
        extra : [
        {
            ama : "jogar",
            como : "volei",},
        {
            ama: "jugar",
            como: "vulebol",
        },    
    ],

    salario:4500,
    aumento:function(valor){
        this.salario += valor
    },
    descontoNoSalario:function(desc){
        this.salario -= desc
    }

}

console.log(cliente.salario)
cliente.aumento(700)
console.log(cliente.salario)
cliente.descontoNoSalario(1500)
console.log(cliente.salario)




  