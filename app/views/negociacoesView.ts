import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

// Generics: aqui eu digo que o <Negociacoes> vai entrar no lugar de T lá no view.ts (como se tivesse passando propriedades)
export class NegociacoesView extends View<Negociacoes> {

/* Esse código foi colocado na view.ts.
  private elemento: HTMLElement

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }
*/

//o template está na classe pai (view) e negociacoesView (que é a classe filha) está herdando o template e é ela que define o que vai retornar
// se tirar o template daqui vai dar erro.
  template(model: Negociacoes): string {
    return `
      <table class='table table-hover table-bordered'>
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          ${model.lista().map(negociacao => {
            return`
              <tr>
                <td>${negociacao.data.toLocaleDateString('pt-BR')}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `
  }

/* Esse código foi colocado na view.ts.
  update(model: Negociacoes): void {
    const template = this.template(model)
    console.log(template);
    this.elemento.innerHTML = template
  }
*/

}