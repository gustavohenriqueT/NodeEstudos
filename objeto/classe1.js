class Lancamento {
    constructor(nome='Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=> {
            valorConsolidado += l.valor
        })
        
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -200)

const constas = new CicloFinanceiro(6, 2025)
constas.addLancamentos(salario, contaDeLuz)
console.log(constas.sumario())

