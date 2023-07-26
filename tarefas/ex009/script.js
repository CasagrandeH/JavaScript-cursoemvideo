let data = new Date()
let year = data.getFullYear()


let res = window.document.querySelector('#res')
let sex = window.document.getElementsByName('sex')
let btn = window.document.querySelector('#btn')



function confirm() {
    let birth = window.document.querySelector('#txtano').value
    let age = year - birth
    let gender = ''

    
    
    if (sex[0].checked) {
        gender = 'Homem'
    } else if (sex[1].checked) {
        gender = 'Mulher'
    } else {
        gender = 'LGBT'
    }

    if (age > year || age < 0) {
        window.alert('[ERRO] Nascimento inválido!')
    } else if (age > 120) {
        window.alert('[ERRO] Nascimento inválido!')
    } else {
        res.innerHTML = `<p>Você ser ${gender} de ${age} anos!</p>`
        /*if (age < 12) {
            res.innerHTML = 
        }*/
    }
    
}

btn.addEventListener('click', confirm)