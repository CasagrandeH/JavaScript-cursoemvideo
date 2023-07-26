function parimp(n) {
    if (n % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let num = parimp(12)
console.log(num)