import { DiasDaSemana } from "../enumerations/diasDaSemana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagemView.js"
import { NegociacoesView } from "../views/negociacoesView.js"

export class NegociacaoController {
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement
  private negociacoes = new Negociacoes() // ou private negociacoes: Negociacoes = new Negociacoes()
  private negociacoesView = new NegociacoesView('#negociacoesView')
  private mensagemView = new MensagemView('#mensagemView')

  constructor() {
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
    this.negociacoesView.update(this.negociacoes)
  }

  public adiciona(): void { 
    const negociacao = this.criaNegociacao()
    console.log('Negociação', negociacao)
    console.log('Volume', negociacao.volume)

    if(negociacao.data.getDay() > DiasDaSemana.DOMINGO && negociacao.data.getDay() < DiasDaSemana.SABADO) { //0 é domingo e 6 é sábado
      this.negociacoes.adiciona(negociacao)
      console.log('Lista de Negociações', this.negociacoes.lista())
      this.atualizaView()
      this.limparFormulario()
    } else {
      this.mensagemView.update("Apenas negociações em dias úteis são permitidas!")
    }
  }
  
  private criaNegociacao(): Negociacao {
    const regExp = /-/g
    const date = new Date(this.inputData.value.replace(regExp, ','))
    const quantidade = parseInt(this.inputQuantidade.value)
    const valor = parseFloat(this.inputValor.value)
    
    return new Negociacao(date, quantidade, valor)
  }
  
  private limparFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus()
  }
  
  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes)
    this.mensagemView.update('Negociação adicionada com sucesso!')
  }

}

