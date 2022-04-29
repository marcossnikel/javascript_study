const clientes = [{
    
        nome: 'Marcos',
        idade : 20,
        cpf: '123456789',
        email : 'marcos@gmail.com',
        fones: ['999232334', '944712081'],
        dependentes : [{ 
              nome: 'Thiago Nikel',
              parentesco: 'Irmão',
              dataNasc : '04/05/1988'
            },
            
            { nome : 'Vera Nikel',
              parentesco : 'Mãe',
              dataNasc: '04/05/1969'
            }],
        },
            

            {  
            nome: 'Ramirez',
            idade : 20,
            cpf: '123456789',
            email : 'marcos@gmail.com',
            fones: ['999232334', '944712081'],
            dependentes : [{ nome: 'Antonio',
                  parentesco: 'Irmão',
                  dataNasc : '04/05/1988'},
                
                { nome : 'Larissa',
                  parentesco : 'Mãe',
                  dataNasc: '04/05/1969'
                }],
                }    
]



const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]


console.table(listaDependentes)