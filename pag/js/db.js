//Acesso ao db
const Client = require('pg').Client //biblioteca para trabalhar com postegres
const cliente = new Client({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432, //ou 5433
    database: "bancoDesigner"
})

//----- Maneira mais simples de conexão -----
cliente.connect(); //abrindo conexão
//executando query sql e jogando resultado no results
cliente.query("SELECT * FROM bancoDesigner").then(results => {
    const resultado = results.rows //joga as linhas na var resultado
    console.table(resultado)
})
.finally(() => cliente.end()) //finalizando conexão
