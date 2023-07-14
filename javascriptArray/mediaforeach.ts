const notas = [10,6.5,8,7.5];

let somaDasNotas = 0;

//Callback
//notas.forEach(nota =>{
//    somaDasNotas += nota
//})
notas.forEach (function(nota){

    somaDasNotas += nota;
})
let media = somaDasNotas/notas.length

console.log(media);



const valorDaFesta = [1000,4333,2000,2345,9888]
let valorFestaParaCadaUm = 0;

valorDaFesta.forEach(valor=>{
    valorFestaParaCadaUm += valor;
}) 
let ValorEmReal = valorFestaParaCadaUm/valorDaFesta.length;

console.log(ValorEmReal);