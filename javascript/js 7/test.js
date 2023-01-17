let password = 2222;
let trys = 3
for(i=0; i<3; i++){
if(prompt(`Введіть пароль. Залишилось спроб - ${trys}`) == password){
break
}else{
    trys--
}
if(trys == 1){
    alert(`Пароль становить одинакові цифри`)
}
}