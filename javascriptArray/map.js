const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota ==10? nota: ++nota)

console.log(notasAtualizadas);


const valoresDoBrigadeiro = [1,1.5,1.8,2]

//Houve um reajusta no preço do leite condensado e os brigadeiros sofrerão alteração

const valoresDoBrigadeiroReajuste = valoresDoBrigadeiro.map( valor => 0.25 + valor)

console.log(valoresDoBrigadeiroReajuste)


const money = [1,2,2,1,6]
const newMoney = money.map(valor => 300 * valor)

console.log(newMoney);