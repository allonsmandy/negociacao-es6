class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = []
        this._armadilha = armadilha //será uma função
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this)
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = []
        this._armadilha(this)
    }
}