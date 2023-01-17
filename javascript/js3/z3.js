let user = "Станіслав Іванович";
let email = "rour.bhop";
let pasword = 123456789;
if(prompt(`Вкажіть ваш email`) == email) {
    if(prompt(`Введіть пароль для акаунту користувача ${user}`) == pasword){
        alert(`Вітаю ${user}`)
    }else{
        alert(`Невірний пароль`)
    }
}else{
    alert(`Користувача під таким email не існує`)
}

