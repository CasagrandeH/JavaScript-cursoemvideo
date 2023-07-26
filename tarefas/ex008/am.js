let num = [5, 2, 5, 7]
/*num[5] = 2*/
num.push(6)
console.log(`${num} || ${num.length}`)
console.log(``)

for (pos = 0; pos < num.length; pos++) {
    console.log(`O index [${pos}] contem o valor: ${num[pos]}`)
}
console.log(``)
console.log(`${num.sort()} || ${num.length}`)