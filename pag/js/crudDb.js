//Conexão Db

//Todo esse código tem que está no node.js
//precisamos do driver pg
//Falta apenas passar os parâmetros


//teste alteração

//Lógica básica para conexão com o banco de dados
const Client = require('rg').Client
const clinete = new Client({

     URL: " ", //Talvez não precise
     USER: " ",
     PASS: " ",
     HOST: " ",
     PORT: " ",
     DATABASE: " ",
     DRIVER: " " //Talvez não precise

})


//Lógica para inserir no db
function insert() {
    //const comandSql("INSERT INTO infos (INSERT INTO infos (data_tarefa, nomeCard, tipoTrabalho, quantidade, qtd_total) VALUES(?,?,?,?,?))")
    
}

//Lógica para atualizar no db
function update(){

}

//Lógica para excluir no db
function del(){

}

//Lógica para listar todos os campos
function list(){

}

//Lógica para pesquisar um determinado designer e retornar seus dados (tarefas)
function searchDesigner(){

}


//Lógica para pesquisar um determinado trabalho via id ou nome do card (exemplo nome: Gabriela 9876)
function searchPersonalizada(){

}





