export class Negociacao {
  private _data: Date
  private _quantidade: number
  private _valor: number

  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data
    this._quantidade = quantidade
    this._valor = valor
  }

/* o mesmo que acima (linhas 2 a 10) assistir os vídeos da aula 5
  constructor(private data: Date, private quantidade: number, private valor: number) {}
*/

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data
  }

  get quantidade(): number {
    return this._quantidade
  }

  get valor(): number {
    return this._valor
  }

  get volume(): number {
    return this._quantidade * this._valor
  }

}