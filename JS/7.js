let toDoList = [
    'shower',
    'eat',
    'brush my teeth',
    'go to bed',
    'read a book'
]

for(let i = 0; i < toDoList.length; i++) {
    console.log('Today i am going to ' + toDoList[i])
}

let listOfCelebrations = [
    {title: 'Christmas', duration: 7, founded: 0, isOfficial: true},
    {title: '23rd of February', duration: 1, founded: 1582, isOfficial: true},
    {title: 'international women`s day', duration: 1, founded: 1910, isOfficial: true},
    {title: 'Maslenitsa', duration: 7, founded: undefined, isOfficial: false},
    {title: 'YCC birthday', duration: 1, founded: 1962, isOfficial: false}
]

for(let i = 0; i < listOfCelebrations.length; i ++) {
    if (listOfCelebrations[i].duration == 7)
        console.log(listOfCelebrations[i].founded)
}

function iterate(array, action) {
    for(let i = 0; i < array.length; i ++){
        action(array[i])
    }
}

function printCelebrate(celebration) {
    if (celebration.isOfficial === true) {
        text = 'Official celebration - '
    } else {
        text = 'Folk celebration - '
    }

    text += celebration.title
    text += ` - lasts for ${celebration.duration} days `
    console.log(text)
}

iterate(listOfCelebrations, printCelebrate)