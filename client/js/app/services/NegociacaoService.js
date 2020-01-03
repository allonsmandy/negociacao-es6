class NegociacaoService {

    obterNegociacoesDaSemana(callback) {

        let xhr = new XMLHttpRequest()

        xhr.open('GET', 'negociacoes/semana')

        // *~ configurações ~*

        // função é chamada sempre que o xhr mudar
        //estados possiveis

        /*  0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição está concluída e a resposta está pronta
        */

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    console.log('Obtendo as negociações do servidor')

                    //dados retornados do servidor xhr.responseText 
                    callback(null, JSON.parse(xhr.responseText)
                        .map(objeto =>
                            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                    // .forEach(negociacao =>
                    //     this._listaNegociacoes.adiciona(negociacao))

                } else {
                    console.log(xhr.responseText)
                    callback('Não foi possivel obter as negociações', null)
                }
            }
        }

        xhr.send()
    }
}