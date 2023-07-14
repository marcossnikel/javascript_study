function cliente(nome,cpf,email,saldo){
    this.nome = nome 
    this.cpf= cpf 
    this.email = email 
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo = saldo + valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}


const Karlos = new clientePoupanca("Karlo","556667799","karlo@gmail.com",500,700)

console.log(Karlos)

clientePoupanca.prototype.depositarPoup = function(value){
    this.saldoPoup = this.saldoPoup + value
}

Karlos.depositarPoup(50)
console.log(Karlos.saldoPoup)
Karlos.depositarPoup(50)
console.log(Karlos.saldoPoup)