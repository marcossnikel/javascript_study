const cliente = {
    nome: "Marcos",
    idade : 20,
    cpf: "123456789",
    email : "marcos@gmail.com"
}

const chaves = ["nome","idade","cpf","email"]

console.log(cliente[chaves[0]])


chaves.forEach(info => console.log(cliente[info]))