let cep = document.getElementById('cep')
let logradouro = document.getElementById('logradouro')
let complemento = document.getElementById('complemento')
let bairro = document.getElementById('bairro')
let localidade = document.getElementById('localidade')
let uf = document.getElementById('uf')
let ibge = document.getElementById('ibge')
let ddd = document.getElementById('ddd')
let erro = document.getElementById('form-message-warning')

let objeto;

let GetCorreio = async (cepo) => {
    await fetch(`https://viacep.com.br/ws/${cepo}/json/`)
        .then(res => res.json())
        .then(data => { objeto = data })
        .catch(err => console.log(err))
}

let LoadApi = async () => {
    cep.focus()
    cep.onblur = async () => {
        if (!cep.value) {
            erro.innerHTML = "Cpf em Branco ou Invalido!!"
            erro.hidden = false

        }
        else {
            await GetCorreio(cep.value)
            setTimeout(() => {
                logradouro.value = objeto.logradouro;
                complemento.value = objeto.complemento;
                bairro.value = objeto.bairro;
                localidade.value = objeto.localidade;
                uf.value = objeto.uf;
                ibge.value = objeto.ibge;
                ddd.value = objeto.ddd;
                erro.hidden = true
            }, 600)
        }

    }
    console.log(objeto)

}

LoadApi()

