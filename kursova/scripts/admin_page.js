function add_tovar(){
    let tovar = {
        name:       document.getElementById('tovar_name').value,
        type:       document.getElementById('tovar_type').value,
        opis:       document.getElementById('tovar_opis').value,
        mass:       document.getElementById('tovar_mass').value,
        price:      document.getElementById('tovar_price').value,
        kcal:       document.getElementById('tovar_kcal').value,
        gar:       document.getElementById('tovar_gar').value,
        fat:        document.getElementById('tovar_fat').value,
        proteins:   document.getElementById('tovar_proteins').value,
        developer:      document.getElementById('tovar_developer').value,
        kartinka:      document.getElementById('tovar_kartinka').value
    }
    db.collection('all_tovars').doc().set(tovar).then(res=>{
        console.log('успішно додано')
    })
}
function hide(id_blocka){
    let block = document.getElementById(id_blocka);
    block.style.display = 'none';
}
function show(id_blocka){
    let block = document.getElementById(id_blocka);
    block.style.display = 'block';
}


function drawTovar(object,nomer){
    let tbody = document.getElementById('tbody');
   
    tbody.innerHTML += `
    <tr>
                    <td  class="red">${nomer}</td>
                    <td class="red">${object.name}</td>
                    <td class="red">${object.type}</td>
                    <td class="red">${object.opis}</td>
                    <td class="red">${object.mass}</td>
                    <td class="red">${object.price}</td>
                    <td class="red">${object.kcal}</td>
                    <td class="red">${object.gar}</td>
                    <td class="red">${object.fat}</td>
                    <td class="red">${object.proteins}</td>
                    <td class="red">${object.developer}</td>
                    <td class="red">${object.kartinka}</td>
                    <th class="red"><button onclick="get_one_tovar_from_fb('${object.id}')">Редагувати товар</button></th>
                    <th class="red"><button onclick="delTovar('${object.id}')">X</button></th>
                </tr>

    `
}


function getTovar_from_fb(){
    document.getElementById('tbody').innerHTML = '';
    let index = 1;
    db.collection('all_tovars').get().then(res =>{
        res.forEach(doc =>{
            let one_tovar = doc.data();
            one_tovar.id = doc.id;
            drawTovar(one_tovar,index)
            index++
        })
    })
}
getTovar_from_fb()


function delTovar(id_v_bazi_dannih){
    db.collection('all_tovars').doc(id_v_bazi_dannih).delete().then(res=>{
        getTovar_from_fb()
    })
}


function get_one_tovar_from_fb(id_tovara){
    db.collection('all_tovars').doc(id_tovara).get().then(res=>{
        let object_tovar = res.data();
        object_tovar.id = res.id;
        console.log(object_tovar.id)
    document.getElementById('tovar_name_edit').value         = object_tovar.name;
    document.getElementById('tovar_type_edit').value         = object_tovar.type;
    document.getElementById('tovar_opis_edit').value         = object_tovar.opis;
    document.getElementById('tovar_mass_edit').value         = object_tovar.mass;
    document.getElementById('tovar_price_edit').value        = object_tovar.price;
    document.getElementById('tovar_kcal_edit').value         = object_tovar.kcal;
    document.getElementById('tovar_gar_edit').value          = object_tovar.gar;
    document.getElementById('tovar_fat_edit').value          =  object_tovar.fat;
    document.getElementById('tovar_proteins_edit').value     = object_tovar.proteins;
    document.getElementById('tovar_developer_edit').value    = object_tovar.developer;
    document.getElementById('tovar_kartinka_edit').value    = object_tovar.kartinka;
    document.getElementById('zbereti_zminu').addEventListener('click',function(){
        let tovar = {
            name:       document.getElementById('tovar_name_edit').value,
            type:       document.getElementById('tovar_type_edit').value,
            opis:       document.getElementById('tovar_opis_edit').value,
            mass:       document.getElementById('tovar_mass_edit').value,
            price:      document.getElementById('tovar_price_edit').value,
            kcal:       document.getElementById('tovar_kcal_edit').value,
            gar:       document.getElementById('tovar_gar_edit').value,
            fat:        document.getElementById('tovar_fat_edit').value,
            proteins:   document.getElementById('tovar_proteins_edit').value,
            developer:      document.getElementById('tovar_developer_edit').value,
            kartinka:      document.getElementById('tovar_kartinka_edit').value
        }
        save_changes(object_tovar.id,tovar);
       
    })
        show('edit_tovar')
    })


 
}


function save_changes(argument,object){
    db.collection('all_tovars').doc(argument).set(object).then(res=>{
        console.log('збережено')
        hide('edit_tovar')
        getTovar_from_fb()
    })
}








