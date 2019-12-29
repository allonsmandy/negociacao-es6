class ListaNegociacoes {

    constructor(contexto, armadilha) {

        this._negociacoes = []
        this._armadilha = armadilha //será uma função
        this._contexto = contexto
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        // this._armadilha(this)

        Reflect.apply(this._armadilha, this._contexto, [this])

        console.log(this)
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = []

        Reflect.apply(this._armadilha, this._contexto, [this])

        // this._armadilha(this)
    }
}