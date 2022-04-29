function cliente(nome,cpf,email,saldo){
    this.nome = nome 
    this.cpf= cpf 
    this.email = email 
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo = saldo + valor
    }
}

const marcos = new cliente("Marcos","39490494879","marcosnikeldev@gmail.com",5000)
const vera = new cliente("Vera","11755790848","vera_nikel@outlook.com",10000)
console.log(marcos)
console.log(vera)

