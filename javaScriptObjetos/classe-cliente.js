class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(value){
        this.saldo = saldo + value
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}


const marcos = new Cliente("Marcos","marcos@gmail.com","39490494879",5500)

marcos.exibirSaldo()
console.log(marcos)
