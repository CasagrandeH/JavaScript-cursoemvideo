var idade = 60
if (idade < 16) {
    console.log(`Com ${idade} anos você não vota!`)
} else if (idade < 18 || idade >= 65) {
    console.log(`Com ${idade} anos o voto é opcional!`)
} else if (idade >= 18) {
    console.log(`Com ${idade} anos o voto é obrigatório!`)
}