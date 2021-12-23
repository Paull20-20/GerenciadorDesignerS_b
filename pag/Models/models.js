//const Sequelize = require("sequelize");
//teste
const db = require('./dbConexao');

const Card = db.sequelize.define("infoCards", {
    data: {
        type: db.Sequelize.STRING
    },
    nomeCard: {
        type: db.Sequelize.STRING
    },
    tipoTrabalho: {
        type: db.Sequelize.STRING
    },
    quantidade: {
        type: db.Sequelize.INTEGER
    },
    qtdTotal: {
        type: db.Sequelize.INTEGER
    },
    qtdCard: {
        type: db.Sequelize.INTEGER
    }

})

module.exports = Card;

//
//Card.sync({force: true});