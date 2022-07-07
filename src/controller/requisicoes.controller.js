class RequisicaoController {
    static url = 'https://kenzie-news-api.herokuapp.com/api/news'

    static async pegarDados() {
        const dados = await fetch(this.url).then((response) => {
            return response.json()
        })
        .then((response) => (response))
       
        .catch((err) =>{
            console.log(err)
        })
        return dados
    }
}


export default RequisicaoController