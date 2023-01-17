let name = 'Петро'
let yrok = 'математика'
let ocinku = []
for(i=0;i<6;i++){
    ocinku[i] = Number(prompt('Які оцінки у вас є?'))
}

console.log(`Вітаю ${name}! Кількість оцінок з предмету ${yrok} рівна ${[ocinku.length]}. Остання оцінка - ${ocinku[ocinku.length-1]}`)

