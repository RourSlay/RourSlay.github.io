

function vuvid_tovariv(){
    let all_tovars = document.getElementById('all_tovars');
    all_tovars.innerHTML = "";
    
    db.collection('all_tovars').get().then(res=>{
    res.forEach(doc =>{
        let tovar = doc.data();
        tovar.id = doc.id;
       
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
        
    })
    })
    }