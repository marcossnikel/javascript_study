 //parâmetros de função
               //2   //2
 function soma(num1, num2){
     return num1 + num2
 }

 console.log(soma(2, 2)); 
 console.log(soma(232, 216)); 
 console.log(soma(-25, 60)); 

 //Parâmetro x argumento
 // Parâmetros de funções possuem ordem
// Tomar cuidado com a ordem dos parâmetros


function nomeIdade(nome , idade){
    return `meu nome é ${nome}, e tenho ${idade} anos`;    
}
//Exemplo de erro em ordem de parâmetros.
console.log(nomeIdade(20,"Marcos"));



function multiply(num1 = 1 , num2 = 1){
    return num1 * num2;
}

console.log(multiply(soma(4,5),soma(3,3) ));
console.log(multiply(soma(4,5) ));


// Função sem parâmetro e sem return
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// Função sem return porém, com parâmetro , no caso , selecionar o nome
//Tem que  ser no formato String
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Marko')   

//Função com retorno e sem parâmetro , comunicação entre 2 funções   
function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Luffo') // “Oi gente! Meu nome é Paula”

   //Função com return e mais de um parâmetro
   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 * numero2 * numero3
    
   }
   
   console.log(operacaoMatematica(5, 2, 10));

   //Parâmetro sem Argumento
   function comParametro(param) {
    console.log(param)
}
comParametro()