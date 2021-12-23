//função ao clicar em sair

function sair(){
    return console.log('sair')
}

function logado(nome){
    document.getElementById('menssagem').innerHTML =  `<div class="alert alert-primary alert-dismissible fade show mt-2" role="alert"> <strong>Seja Bem vindo ${nome}!</strong> Pra Cima!!! 📢🚀 <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>` 
}

function dataAtual(){
    data = new Date
    console.log(data.getDate() + " / " + data.getMonth() + " / " + data.getFullYear()) //debug
    document.getElementById('data').value = data.getDate() + " / " + data.getMonth() + " / " + data.getFullYear() 
}

dataAtual()

function rotaDados(){
    app.get('/cad', function(req, res){
        res.render('dados')
    })
}