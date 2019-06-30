class MensagemView extends View{

    constructor(elemento) {
        super(elemento);
    }
    
    _template(model) {
        
        return model.texto ? `<p class="alert alert-info">${model._texto}</p>` : '<p></p>';
    }

}