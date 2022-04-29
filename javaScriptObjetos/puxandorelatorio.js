const cliente = {
    nome: 'Marcos',
    idade : 20,
    cpf: '123456789',
    email : 'marcos@gmail.com',
    fones: ['999232334', '944712081'],
    dependentes : [
        { nome: 'Thiago Nikel',
          parentesco: 'Irmão',
          dataNasc : '04/05/1988'},
        
        { nome : 'Vera Nikel',
          parentesco : 'Mãe',
          dataNasc: '04/05/1969'}
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo = saldo + valor
    }
}
   let relatorio="";
    for(let info in cliente){
        if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
            continue
        }else{
            relatorio = relatorio + ` 
            ${info} ===>  ${cliente[info]}`
        }
    }
    console.log(relatorio)