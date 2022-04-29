const nomes = ['Ana','Marcelo','Maria','Mauro']
const notas =  [7,4.5,8,7.5]


const reprovados = nomes.filter((_,indice) =>  notas[indice] < 5)

console.log(`reprovados : ${reprovados}`)



const candidatos = ['Veronica','Joao','Kaitlyn','Kharmaine','Helos']
const aprovadosNaCamara = [2,1,2,2,1]

const aprovados = candidatos.filter((_,indice)=> aprovadosNaCamara[indice] > 1)

console.log(`Aprovados na Camara : ${candidatos}`);

