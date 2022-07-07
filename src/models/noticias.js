class Noticias {
    static cardNoticias(categoria, titulo, resumo, fonte, imagem, noticia_completa) {
        
        const section        = document.querySelector('section')
        const foto_card      = document.createElement('img')
        const apoio          = document.createElement('div')
        const principal_card = document.createElement('div')
        const categoria_card = document.createElement('p')
        const titulo_card    = document.createElement('h1')
        const info_card      = document.createElement('p')
        const fonte_card     = document.createElement('p')

        apoio.classList.add('apoio')
        foto_card.classList.add('foto-card')
        principal_card.classList.add('card')
        categoria_card.classList.add('categoria-card')
        titulo_card.classList.add('titulo-card')
        info_card.classList.add('info-card')
        fonte_card.classList.add('fonte-card')

        foto_card.src            = imagem
        categoria_card.innerText = categoria
        titulo_card.innerText    = titulo
        info_card.innerText      = resumo
        fonte_card.innerText     = fonte

        principal_card.append(categoria_card, titulo_card, info_card, fonte_card)
        apoio.append(foto_card,principal_card)
        section.append(apoio)

    }
    static noticiaPrincipal(categoria, titulo, info, fonte, imagem){
        const main           = document.querySelector('main')
        const apoio_principal          = document.createElement('div')
        const principal = document.createElement('div')
        const categoria_principal = document.createElement('p')
        const titulo_principal  = document.createElement('h1')
        const info_principal    = document.createElement('p')
        const fonte_principal    = document.createElement('p')
        const foto_principal = document.createElement('img')


        apoio_principal.classList.add('apoio-principal')
        principal.classList.add('principal')
        categoria_principal.classList.add('categoria')
        titulo_principal.classList.add('titulo')
        info_principal.classList.add('info')
        fonte_principal.classList.add('fonte')
        foto_principal.classList.add('foto-principal')

        categoria_principal.innerText = categoria
        titulo_principal.innerText = titulo
        info_principal.innerText = info
        fonte_principal.innerText = fonte
        foto_principal.src = imagem

        principal.append(categoria_principal,titulo_principal,info_principal,fonte_principal)
        apoio_principal.append(principal, foto_principal)
        main.append(apoio_principal)
    }
}



export default Noticias