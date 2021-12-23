const Sequelize = require("sequelize");

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

//
Card.sync({force: true});