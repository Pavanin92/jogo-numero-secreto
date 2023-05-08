function validaChute(chute){
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    if (numeroPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Diga um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}
//verifica se o valor falado é um número válido (se for uma palávra, mostra que o valor é inválido)
function chuteInvalido(numero) {
    return Number.isNaN(numero)
}
//verifica se o valor falado está entre os valores permitidos/estipulados no enunciado do jogo
function numeroPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})