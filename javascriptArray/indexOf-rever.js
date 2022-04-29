const alunos =['Joao', 'Ju','Caio','Ana']
const mediaAlunos = [10,7,9,6];

let listaDeMediaDosAlunos =[alunos,mediaAlunos]

//includes -> booleano
//index-of-> returna o numero do indice que se localiza

const exibeNomeNota = (nomeDoAluno) => {
    //Checa se existe Ana no indice 0 na listaDeMediaDosAlunos, que no caos é alunos , e como tem ana retorna um TRUE
    if(listaDeMediaDosAlunos[0].includes(nomeDoAluno)){
                                              //Ve a posição em numero (3)
        let indice = listaDeMediaDosAlunos[0].indexOf(nomeDoAluno)
                                //[0][3]
        return listaDeMediaDosAlunos[0][indice] + ` ,sua media é ` + listaDeMediaDosAlunos[1][indice]
    }
 
    else {
    return "Aluno não esta cadastrado"
}
}

console.log(exibeNomeNota("Joao"))

