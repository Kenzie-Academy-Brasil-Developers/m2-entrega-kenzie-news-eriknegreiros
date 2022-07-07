import Noticias from "../models/noticias.js"
import RequisicaoController from "./requisicoes.controller.js"

class IndexController{
    static async listarCard(){
        const listarCard = document.querySelector('section')

        listarCard.innerHTML = ''

        const sectionDataBase = await RequisicaoController.pegarDados()
        console.log(sectionDataBase)
        
        const primeiroCard = sectionDataBase.shift()
        
        const cardMain = Noticias.noticiaPrincipal(primeiroCard.categoria, primeiroCard.titulo, primeiroCard.resumo, primeiroCard.fonte, primeiroCard.imagem)


        sectionDataBase.forEach(card => { 
          const div = document.createElement('div')
            
          const cardCompleto = Noticias.cardNoticias(card.categoria, card.titulo, card.resumo, card.fonte, card.imagem)

          div.append(cardCompleto)


        });
    }
}

export default IndexController