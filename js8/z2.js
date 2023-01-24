let repeat = true;
let tovaru = 0;
let suma = 0;

while(repeat == true){
suma = suma + Number(prompt('Введіть ціну товару'))
tovaru = tovaru + 1
repeat = confirm('Продовжити покупки?')
}
alert(`Ви придбали ${tovaru} товарів на загальну вартість - ${suma} грн`)