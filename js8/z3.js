let slovo = 'бобер';
let suma = 0;
let nomer = 0;
let pidkazki = ['Гризуть дерева','складається з 5 букув','схожі до капібар']
alert(`Тварина, яка живе і в воді, і на суші. В слові ${slovo.length} букв.`)

while(prompt('Відгадайте слово') != slovo){
suma++
if(nomer<3){
if(confirm(`Вам потрібна підказка?`) == true){
alert(pidkazki[nomer])
nomer++
}}}
alert(`Кількість спроб - ${suma}. Використано підказок ${nomer}`)