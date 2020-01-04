class NegociacaoService {

    constructor() {

        this._http = new HttpService()
    }

    // *~ negociações da semana ~*
    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto =>
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(error => {
                    console.log(error)
                    reject('Não foi possivel obter as negociações da semana')
                })
        })

    }

    // *~ negociações da semana anterior ~*
    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto =>
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(error => {
                    console.log(error)
                    reject('Não foi possivel obter as negociações da semana anterior')
                })
        })

    }

    // *~ negociaçoes na semana retrasada ~*

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto =>
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(error => {
                    console.log(error)
                    reject('Não foi possivel obter as negociações da semana retrasada')
                })
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