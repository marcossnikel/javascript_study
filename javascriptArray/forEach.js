const nomes =['Ana','Ju','Paula','Marcos']

nomes.forEach(imprimeNomes)
function imprimeNomes(nome){
    console.log(nome)
}


console.log(`Os Sabores disponiveis são :`)


//Cria a variavel
const sabores = ['Limão','Manga','Maracuja','Uva']
//Utiliza-se do forEach como Callback >> Faz o looping sem o [i] , imprimindo todos os nomes da variavel
sabores.forEach(imprimeSabores)
//função que vai imprimir os nomes
function imprimeSabores(sabor){
    console.log(sabor);
}

