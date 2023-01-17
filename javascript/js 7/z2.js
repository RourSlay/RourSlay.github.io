let numbers = [7,6,8]
let numbers_old = numbers.slice();
for(i=0;i<5;i++){
let chislo = Number(prompt('Вгадайте число'))
if(numbers.indexOf(chislo) == -1){
numbers.push(chislo)
}else{
numbers[numbers.indexOf(chislo)] = '*'
}
}
console.log(numbers_old)  
console.log(numbers)
if(numbers.length <=5){ 
    alert(`Перемога! Вгадано числа: ${numbers_old}`)
}