let numbers = []

while(numbers.length < 5){
    numbers.push(Number(prompt('Введіть число')))
}



console.log(`Початковий масив - ${numbers}`)
console.log(`Масив у зворотнбому порядку - ${numbers.reverse()}`)
console.log(`Масив у спадаючому порядку - ${numbers.sort()}`)
