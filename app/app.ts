import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController()
const form = document.querySelector('.form')
form.addEventListener('submit', evento => {
  evento.preventDefault()
  controller.adiciona()
    
})



//import { Negociacao } from "./models/negociacao.js";

// const negociacao = new Negociacao(new Date(), 10, 100)

// console.log(negociacao.data) // apenas lendo a data
// /**
//  * não posso atribuir um valor a um getter pois ele é somente para leitura!
//  * console.log(negociacao.quantidade = 1000) 
//  */
// console.log(negociacao)
// console.log(negociacao.volume) // 1000
