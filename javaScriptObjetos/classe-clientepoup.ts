class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(value){
        this.saldo +=  value
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoup extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(value){
        this.saldoPoup = this.saldoPoup + value
    }
}

const marcos = new ClientePoup("MARCOS","marcos@egmail","2312312",500,700)

console.log(marcos)

marcos.depositar(200)
marcos.depositarPoup(200)

console.log(marcos)
