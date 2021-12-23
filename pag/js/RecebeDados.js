const dbConexao = require('./dbConexao'); 


//criando tabela infoCards
const RecebeDados = dbConexao.sequelize.define("infoCards2s", {
    data: {
        type: dbConexao.Sequelize.STRING
    },
    nomeCard: {
        type: dbConexao.Sequelize.STRING
    },
    tipoTrabalho: {
        type: dbConexao.Sequelize.STRING
    },
    quantidade: {
        type: dbConexao.Sequelize.INTEGER
    }

})


//
//RecebeDados.sync({force: true}); //criando a tabela acima!
module.exports = RecebeDados;