let catalog = [
    { title: "War and piece", pages: 2000 },
    { title: "Crime and punishment", pages: 340 },
    { title: "Harry Potter and the principles of rational thought", pages: 2000 },
    { title: "Java Script. Complete guide", pages: 1080 },
]

catalog.push({ title: 'Wizard of Oz', pages: 990 })

console.log(catalog)

// catalog.forEach(function (elem, i, array) {
//     console.log(`${i + 1}) ${elem.title}`)
// })

catalog.forEach((elem, i) => console.log(`${i + 1}) ${elem.title}`))

let linear = (x) => 2 * x + 4

console.log(linear(4))

let findHarry = (x, i) => i == 0 || x.title.includes('Гарри')
let findMoreThen1000 = (x) => x.pages > 1000
let harry = catalog.find(findHarry)
console.log(harry)

let bigBooks = catalog
    .filter(findMoreThen1000)
console.log('Biiiig boooooks:')
console.log(bigBooks)

let newArray = catalog.map((elem) => {
    return {
        shortTitleV: elem.title.split(' ')[0],
        shortTitleN: elem.title.substring(0, elem.title.indexOf(' ')),
        isMore1kPages: elem.pages > 1000
    }
})
console.log(newArray)