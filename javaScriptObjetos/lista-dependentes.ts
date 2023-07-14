const cliente = {
    nome: "Marcos",
    idade : 20,
    cpf: "123456789",
    email : "marcos@gmail.com",
    fones: ["999232334", "944712081"],
    dependentes : [{
        nome : "Vera",
        parentesco : "Mãe",
        dataNasc : "04/05/1969"
    }]
}

cliente.dependentes.push({
    nome : "Thiago Nikel",
    parentesco : "Irmão",
    dataNasc : "11/05/1988"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="11/05/1988")

console.log(filhaMaisNova[0].nome)
console.log(filhaMaisNova)
    