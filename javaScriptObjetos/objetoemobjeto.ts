const cliente = {
    nome: "Marcos",
    idade : 20,
    cpf: "123456789",
    email : "marcos@gmail.com",
    fones: ["999232334", "944712081"]
}

cliente.dependentes = {
    nome : "Vera",
    parentesco : "Mãe",
    dataNasc : "04/05/1969"
}

console.log(cliente)


cliente.dependentes.nome = "Vera Nikel"

console.log(cliente)
