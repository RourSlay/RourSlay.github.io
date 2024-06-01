window.onload = function(){
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}




function vuvid_tovariv(tovar){
    let all_tovars = document.getElementById('all_tovars');
           
            let golovniy_block = document.createElement('div');
            golovniy_block.classList.add('one_tovar');
           
            let img_block = document.createElement('div');
            img_block.classList.add('img');

            let img_tovara = document.createElement('img');
            img_tovara.classList.add('foto_tovar');
            img_tovara.setAttribute('src',tovar.img);

            let name_block = document.createElement('div');
            name_block.classList.add('name');

            let tovare_name = document.createElement('h4');
            tovare_name.setAttribute('align','center');
            tovare_name.innerText = tovar.name;
           
            let opis_block = document.createElement('div');
            opis_block.classList.add('opis');

            let opis_h5 = document.createElement('h5');
            opis_h5.setAttribute('align','center');
            opis_h5.innerText = tovar.opis;

            let mass_ccal_block = document.createElement('div');
            mass_ccal_block.classList.add('mass_ccal');


            let mass_ccal_p = document.createElement('p');
            mass_ccal_p.setAttribute('align','center');
            mass_ccal_p.innerText = `Вага - ${tovar.mass}гр. Ккал - ${tovar.kcal} `;


            let buttons_block = document.createElement('div');
            buttons_block.classList.add('buttons');


            let red_block = document.createElement('div');
            red_block.classList.add('red');


            let buttons_img = document.createElement('img');
            buttons_img.classList.add('buttons_img');
            buttons_img.setAttribute('src',"pencil.svg");


            let price_block = document.createElement('div');
            price_block.classList.add('price');
            price_block.innerText = `${tovar.price}грн.`


            let koshik_block = document.createElement('div');
            koshik_block.classList.add('koshik');


            let buttons_img_cart = document.createElement('img');
            buttons_img_cart.classList.add('buttons_img');
            buttons_img_cart.setAttribute('src',"cart.svg");
           
            img_block.appendChild(img_tovara);


            name_block.appendChild(tovare_name);


            opis_block.appendChild(opis_h5);


            mass_ccal_block.appendChild(mass_ccal_p);


            red_block.appendChild(buttons_img);


            koshik_block.appendChild(buttons_img_cart);


            buttons_block.appendChild(red_block);
            buttons_block.appendChild(price_block);
            buttons_block.appendChild(koshik_block);


            golovniy_block.appendChild(img_block);
            golovniy_block.appendChild(name_block);
            golovniy_block.appendChild(opis_block);
            golovniy_block.appendChild(mass_ccal_block);
            golovniy_block.appendChild(buttons_block);


            all_tovars.appendChild(golovniy_block);


}





function giga_vuvid(){    
let all_tovars = document.getElementById('all_tovars');
let filter = JSON.parse(localStorage.getItem('filter'));
db.collection('all_tovars').get().then(res=>{
    let masive =[];
    let masive_filtrat =[];
    res.forEach(doc=>{
        let tovar = doc.data();
        tovar.id = doc.id;
        masive.push(tovar)
    })

    if(filter != null){
if(filter.name != ""){
    masive_name = masive.filter(tovar=>{
        return tovar.name.toLowerCase().includes(filter.name)
    })
}
if(filter.type != ""){
    masive_filtrat = masive.filter(tovar=>{
        return tovar.type == filter.type
    })
}
if(filter.minprice != ""){
    masive_filtrat = masive.filter(tovar=>{
        return tovar.minprice >= filter.minprice
    })
}
if(filter.maxprice != ""){
    masive_filtrat = masive.filter(tovar=>{
        return tovar.maxprice <= filter.maxprice
    })
}



    all_tovars.innerHTML = "";
masive_filtrat.forEach(tovar =>{

    vuvid_tovariv(tovar)
})
}else{
         all_tovars.innerHTML = "";
    masive.forEach(tovar =>{   

        vuvid_tovariv(tovar)
    })
}

})
}
function saveFilter(){
    let filter = {
        name:     document.getElementById('filter_name').value,
        type:     document.getElementById('filter_name').value,
        minprice: Number(document.getElementById('slider-1').value),
        maxprice: Number(document.getElementById('slider-2').value),
    }
    localStorage.setItem("filter", JSON.stringify(filter))
}
giga_vuvid()
function clearFilter(){
localStorage.removeItem("filter")
    document.getElementById('filter_name').value = '';
    document.getElementById('filter_name').value = '';
    Number(document.getElementById('slider-1')).value = '';
    Number(document.getElementById('slider-2')).value ='';
    window.location.reload()
}
