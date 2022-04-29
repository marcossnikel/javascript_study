//Classes :
// - Modelos utilizados para a criação de objetos

//Exemplo
class pessoa{
    constructor(nome,sobrenome,cpf,email,idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
        this.idade = idade
    }
    
    exibirNomeCompleto(){ 
        console.log(`${this.nome} ${this.sobrenome}`)
    }
    
}

class programador extends pessoa{
    constructor(nome,sobrenome,cpf,email,idade,linguagem){
        super(nome,sobrenome,cpf,email)
        this.linguagem = linguagem
    }
}

const novoDev = new programador("Marcos","Nikel","marcos@email.com","20","Javascript")
console.log(novoDev)

console.log(exibirNomeCompleto)