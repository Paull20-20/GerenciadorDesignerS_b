class Dados{
    constructor(data, nome, trabalho, quantidade, qtdTotal, qtdCard){
        this.data = data
        this.nome = nome
        this.trabalho = trabalho
        this.quantidade = quantidade
        this.qtdTotal = qtdTotal
        this.qtdCard = qtdCard
    }

    validarDados(){
        for(let i in this){
            if(this[i] == null || this[i] == undefined || this[i] == ''){
                return false // vai retornar para o if da function
            }
        }// vai percorrer o construct
        return true
    }
}



function cadastrarDados(){
    
                                       //ID
    let data = document.getElementById('data')
    let nome = document.getElementById('nomecard')
    let trabalho = document.getElementById('trabalho')
    let quantidade = document.getElementById('quantidade')
    let qtdTotal = 'nenhum valor'
    let qtdCard = 'nenhum valor'

    let dados = new Dados(
        data.value, // recupero o valor do ID
        nome.value,
        trabalho.value,
        quantidade.value,
        qtdTotal = qtdTotal,
        qtdCard = qtdCard
    )

    // logica de pontuação

    // qtdTotal
    if(trabalho.value == 'Retificação Layout' || trabalho.value == 'Retificação Folha'){
        dados.qtdTotal = '0'
        dados.qtdCard = '0' //qtdCard

    } if (trabalho.value == 'Mod Layout'){
        var qtd = parseFloat(quantidade.value) * 0.5
        dados.qtdTotal = qtd.toString()

    } if (trabalho.value == 'Layout' || trabalho.value == 'Folha' || trabalho.value == 'Mod Folha') {
        dados.qtdTotal = quantidade.value
    }
    // qtdCard
    if(trabalho.value == 'Layout' || trabalho.value == 'Folha' || trabalho.value == 'Mod Layout' || trabalho.value == 'Mod Folha'){
        dados.qtdCard = '1'
    }


    if(dados.validarDados()){
        //passagem correta
        //bd.gravar(despesas)

        // modal programático
        // menssagem de sucesso
        document.getElementById('modal_msg').innerHTML = 'Sucesso'
        document.getElementById('modal_msg').className = 'text-success'

        // limpando os campos do formulario 
        //data.value = ''
        nome.value = ''
        nome.value = ''
        trabalho.value = ''
        quantidade.value = ''

        

    } else { // qd for falso

        // menssagem de erro
        document.getElementById('modal_msg').innerHTML = 'Error na iclusão do cadastro'
        document.getElementById('modal_msg').className = 'text-danger'


        // error 
    }


    console.log(dados)

}
