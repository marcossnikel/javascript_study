const cliente = {
    nome: "Marcos",
    idade : 20,
    cpf: "123456789",
    email : "marcos@gmail.com",
    fones: ["999232334", "944712081"],
    dependentes : [
        { nome: "Thiago Nikel",
          parentesco: "Irmão",
          dataNasc : "04/05/1988"},
        { nome : "Vera Nikel",
          parentesco : "Mãe",
          dataNasc: "04/05/1969"}
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    },
    sacar:function(saque){
        this.saldo -= saque
    },
    
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
cliente.sacar (80)
console.log(cliente.saldo)

