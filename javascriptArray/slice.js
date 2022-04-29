    const nome =[`João`, `Juliana`, "Ana", "Caio" , "Lara", "Marjorie" , "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", 
    "Paulo", "Bia", "Vivian", "Isabela", "Vinicius","Renan", "Renata","Daisy","Camilo"]
                        //0       //10
    const sala1 = nome.slice(0, nome.length/2);
                            //10 para frente
    const sala2 = nome.slice (nome.length/2);


    console.log(`Alunos da sala 1: ${sala1}`);
    console.log(`Alunos da sala 2: ${sala2}`);
    console.log(nome.length);

//slice aceita alguns parâmetros
// 2 parâmetros (0 [primeiro parâmetro])
// slice cortou no indice 0 e terminou no segundo parâmetro (nome.length/2);


const jogadores = ["James", "Arthur", "Luffo", "Marko", "Elpitz", "Ramon", "Alixia", "Catherine"]
const time1 = jogadores.slice (0, jogadores.length/2);
const time2 = jogadores.slice (jogadores.length/2);

console.log(`Team One !! : ${time1}`);
console.log(`Second Team !!: ${time2}`);

