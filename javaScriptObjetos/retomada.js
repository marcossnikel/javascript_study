const dadosDeCadastro = { 

    nome : "Marcos Nikel",
    idade : "20 Anos",
    dataNasc: "04/04/2002",
    hobbie: "Programar",
    contato : ["(11)94471-2081","(11)99929-2324"],
    email : "marcosnikeldev@gmail.com",
    linguagems: [{ 

        principal : "Java-Script",
        secundaria : "C",
        meta : "Desenvolvedor Full-Stack"
    }],
    
    saldo:1000,
    depositar:function(valor){
        this.saldo += valor
    }
}
console.log(dadosDeCadastro.saldo)
dadosDeCadastro.depositar(500)
console.log(dadosDeCadastro.saldo)

const dados = ["nome","idade","dataNasc","email","contato"]
// // console.log(dadosDeCadastro[dados[3]])

// //  dados.forEach(info => console.log(dadosDeCadastro[info]))

//  dadosDeCadastro.disponibilidade = "All Time"

// //  console.log(dadosDeCadastro)

//  dadosDeCadastro.nome = "Marcos Nikel Leite Machado"

//  console.log(dadosDeCadastro)

// dadosDeCadastro.contato.forEach(fone => console.log(fone))
// dadosDeCadastro.linguagems.forEach(test => console.log(test))

dadosDeCadastro.parentes = [{
    
        nome: "Kainan Nikel",
        idade:"29 Anos",
        hobbie:"Trade",
    },
    {
        nome: "Roberta Nikel",
        idade:"25 Anos",
        hobbie:"Dentista"    
    }]
//console.log(dadosDeCadastro)
const dadosRoberta = dadosDeCadastro.parentes.filter(parente => parente.hobbie === "Dentista")

// console.log(dadosRoberta[0])

// let = dadosSimplificados = "";
// for(let info in dadosDeCadastro){
//     dadosSimplificados = dadosSimplificados + `${info} ===>  ${dadosDeCadastro[info]}`
// }
// console.log(dadosSimplificados)

//Retirar Dados Desnecessários do console.log e estilizar bonito a representação

let = dadosSimplificados = "";
for(let info in dadosDeCadastro){
   if(typeof dadosDeCadastro[info] === "object" || typeof dadosDeCadastro[info] === "function"){
       continue;
   }else{
       dadosSimplificados = dadosSimplificados + `
       ${info} ===> ${dadosDeCadastro.info}`
   }
}
    console.log(dadosSimplificados)




   function offerSecurity(obj){
       const proposta = Object.keys(obj);
       if(proposta.includes("parentes")){
           console.log(`You want to check about our offer of Security ${obj.nome} ?`);
       }
   }

   offerSecurity(dadosDeCadastro)
