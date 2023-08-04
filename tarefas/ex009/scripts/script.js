let add = document.querySelector('#add')
let info = document.querySelector('#info')
let finish = document.querySelector('#finish')
let res = document.querySelector('#res')
let values = []

function adds() {
    let number = document.querySelector('#number')
    let num = Number(number.value)

    if (num < 1 || num > 100 || isNaN(num)) {
        window.alert('Preencha a caixa com valores de 1 a 100!')
    } else if (values.includes(num)) {
        window.alert('O numero ja está na lista!')
    } else {
        values.push(num) 
        info.value += `Valor ${num} adicionado.\n`;
        //O codigo abaixo faz com que a caixa de texto scrolle para baixo automaticamente
        info.scrollTop = info.scrollHeight
    }

    /*Esta condicional serve para apagar o resultado anterior
    caso o usuario queira começar denovo.*/
    if (res.innerHTML !== '<p>Resultado...</p>') {
        res.innerHTML = '<p>Resultado...</p>'
    }

    /*Estas linhas de codigo fazem com que o input automaticamente
    seja limpo ao executar a função, e o codigo de baixo faz com que
    a caixa seja automaticamente selecionada para mais rapida digitação.*/
    number.value = ''
    number.focus()

}

function finishes() {
    if (values.length === 0) {
        window.alert('Adicione dados antes de finalizar!')
    } else {
        len = values.length
        total = 0
        big = values[0]
        small = values[0]
        for (value of values) {
            total += value
            if (value > big) {
                big = value
            } else if (value < small) {
                small = value
            }
        }
        media = total / len

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${len} numeros cadastrados.</p>`
        res.innerHTML += `<p>O <strong>maior</strong> valor informado foi ${big}.</p>`
        res.innerHTML += `<p>O <strong>menor</strong> valor informado foi ${small}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${total}.</p>`
        res.innerHTML += `<p>A media dos valores digitadois é ${media}.</p>`

        values = []
        info.value = ''
    }
}

add.addEventListener('click', adds)
finish.addEventListener('click', finishes)