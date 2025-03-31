function tratarErro(erro){
    throw new Error('....')
}

function imprimirNome(objt){
    try{
    console.log(objt.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const objt = { nome: 'Roberto'}
imprimirNome(objt)