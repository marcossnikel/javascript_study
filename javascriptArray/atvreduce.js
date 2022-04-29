//const numeros = [50, 50, 65, 50]

//const soma = numeros.reduce((acum, atual) => atual + acum, 0)

//console.log(soma) //170

const soma = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

   