
const express = require("express");
var app = express();
var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
const bodyparser = require('body-parser');
const RecebeDados = require('RecebeDados');

const Sequelize = require("sequelize");

 //body-parser, configurado!
 app.use(bodyparser.urlencoded({extended: false}))
 app.use(bodyparser.json())


//Rotas
    app.get('/cad', function(req, res){
        res.render('inicio')
    })

    //salvando no db
    app.post('/add', function(req, res){
        RecebeDados.create({
            data: req.body.data,
            nomeCard: req.body.nomeCard,
            tipoTrabalho: req.body.tipoTrabalho,
            quantidade: req.body.quantidade,
            qtdTotal: req.body.qtdTotal,
            qtdCard: req.body.qtdCard
        }).then(function(){
            res.send("Enviado com sucesso")
        }).catch(function(erro){
            res.send("Erro:") + erro
        })


        //recebendo os dados do forms
        
    })

//Configurando handlebars, informando ao express que vamos usar o handlebars como template engine
    //Template Engine
    app.engine('handlebars', hbs.engine);  //main é o template padrão da aplicação
    app.set('view engine', 'handlebars');


app.listen(8081, function(){
    console.log("Server rodando na url http://localhost:8081");
})
