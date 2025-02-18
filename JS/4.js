// for (let i = 0; i <= 10; i++) {
//     console.log(`Current ineration ${i}`)
// }

let num = 4
let fib_1 = 0
let fib_2 = 1

if (num % 2 === 0) {
    for (let i = 1; i < (num / 2); i++) {
        fib_1 += fib_2
        fib_2 += fib_1
}
console.log(fib_1)
} else if (num % 2 === 1) {
    for (let i = 1; i < (num / 2) + 1; i++) {
        fib_1 += fib_2
        fib_2 += fib_1
}
console.log(fib_1)
}