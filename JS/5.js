function sayHi() {
    console.log('hi')
}

function sayHiWithName(name) {
    console.log(`hai ${name}`)
}

sayHiWithName('Egor')

function sum(x, y) {
    return x + y
}

let total = sum(1, 34567890)
console.log(total)

function findRoot(a, b, c) {
    let D = b * b - 4 * a * c

    if (D == 0) {
        console.log('one root')
        return [Nan, -b / (2 * a)]
    } else if (D > 0) {
        console.log('two roots')
        let root1 = (-b + Math.sqrt(D)) / (2 * a)
        let root2 = (-b - Math.sqrt(D)) / (2 * a)
        return [root1, root2]
    } else {
        console.log('no roots')
        return [NaN, NaN]
    }
}

console.log(findRoot(-1, 0, 5))

// Typical functions

let myString = 'today I ate a huge slice of a huge pizza'
console.log(myString)
console.log(myString.toLowerCase())
console.log(myString.toUpperCase())
console.log(myString.trim())
console.log(myString.substring())
console.log(myString.includes('huge slice'))
console.log(myString.replace('huge', 'small'))
console.log(myString.replaceAll('huge', 'small'))
