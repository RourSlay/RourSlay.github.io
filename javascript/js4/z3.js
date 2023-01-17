let pitanya = prompt('Введи будь яке число, і я скажу, чи воно додатнє, чи воно відємне')

if(pitanya % 2 == 1 && pitanya > 0){
alert('Введене число є додатнім та непарним')
}else if(pitanya % 2 == 0 && pitanya < 0){
alert('Дане число є відємне та парне')
}else if(pitanya == 0){
alert('Дане число не є ні додатнє, ні відємне ')
}else if(pitanya % 2 == 0 && pitanya > 0){
alert('Дане число є донатнім та парним')    
}else if(pitanya % 2 == -1 && pitanya < 0){
alert('Дане число є відємне та непарне')
}else{  
alert('Невірно введено число')}



