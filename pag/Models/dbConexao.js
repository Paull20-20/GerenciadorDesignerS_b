const Sequelize = require("sequelize");
//conexão com o banco de dados Mysql
//Acesso funcionando perfeitamente!
const sequelize = new Sequelize('bancoDesigner', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//verificando conexão via console.
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexao: " + erro)
})

//exportando conexão com o db
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/*

//criando tabela infoCards
const Card = sequelize.define("infoCards", {
    data: {
        type: Sequelize.STRING
    },
    nomeCard: {
        type: Sequelize.STRING
    },
    tipoTrabalho: {
        type: Sequelize.STRING
    },
    quantidade: {
        type: Sequelize.INTEGER
    }

})

*/
//
//Card.sync({force: true}); //criando a tabela acima!

/*
//exportação padrão
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}*/

//insert to db
/*
Card.create({
    data: "22/12/2021",
    nomeCard: "Tiago 8839",
    tipoTrabalho: "Layout",
    quantidade: 10
})
*/
