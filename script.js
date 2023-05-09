function trocar(cor){
    document.body.style.background = cor
}


const data = new Date()

const dia = String(data.getDate()).padStart(2,0)

const mes = String(data.getMonth()).padStart(2,0)

const ano = data.getFullYear()

const dataAtual = `${dia}/${mes}/${ano}`