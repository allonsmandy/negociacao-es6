class NegociacaoService {

    // *~ negociações da semana ~*
    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            xhr.open('GET', 'negociacoes/semana')

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        console.log('Obtendo as negociações do servidor')

                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto =>
                                new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                    } else {
                        console.log(xhr.responseText)
                        reject('Não foi possivel obter as negociações da semana')
                    }
                }
            }

            xhr.send()
        })

    }

    // *~ negociações da semana anterior ~*
    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            xhr.open('GET', 'negociacoes/anterior')

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        console.log('Obtendo as negociações do servidor')

                        //dados retornados do servidor xhr.responseText 
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto =>
                                new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                        // .forEach(negociacao =>
                        //     this._listaNegociacoes.adiciona(negociacao))

                    } else {
                        console.log(xhr.responseText)
                        reject('Não foi possivel obter as negociações da semana anterior')
                    }
                }
            }

            xhr.send()
        })

    }

    // *~ negociaçoes na semana retrasada ~*

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            xhr.open('GET', 'negociacoes/retrasada')

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        console.log('Obtendo as negociações do servidor')

                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto =>
                                new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                    } else {
                        console.log(xhr.responseText)
                        reject('Não foi possivel obter as negociações da semana retrasada')
                    }
                }
            }

            xhr.send()
        })

    }
}

        // *~ configurações ~*

        // onreadystatechange função é chamada sempre que o xhr mudar
        //estados possiveis

/*  0: requisição ainda não iniciada
    1: conexão com o servidor estabelecida
    2: requisição recebida
    3: processando requisição
    4: requisição está concluída e a resposta está pronta
*/