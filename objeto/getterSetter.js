const sequencia = {
    _valor: 1, 
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor + valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não funciona pois não posso colocar um valor menor do que eu defini anteriormente na minha "pseudovariável"
console.log(sequencia.valor, sequencia.valor)
