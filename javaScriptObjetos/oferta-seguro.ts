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



function oferecerSeguro(obj){
    //propClientes se tornou , por conta do Object.keys , um array com strings que cada uma é uma chave do objeto
    const propClientes = Object.keys(obj);
    if(propClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
oferecerSeguro(cliente)

