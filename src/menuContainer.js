import { pizza } from "./pizzaMenu.js";

const menuDiv = document.createElement('div');
menuDiv.setAttribute('id', 'menu-container');

pizza.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item-cont');
    
    const img = document.createElement('img');
    img.src = item.img;

    const pName = document.createElement('p');
    pName.setAttribute('class', 'item-name')
    pName.textContent = item.name;

    const pDesc = document.createElement('p');
    if(item.description.length > 100) {
        pDesc.textContent = `${item.description.substring(0, 100)}...read more`
    } else {
        pDesc.textContent = item.description;
    }
    

    const pPrice = document.createElement('p');
    pPrice.setAttribute('class', 'item-price')
    pPrice.textContent = `\u00A5 ${item.price}`;

    itemDiv.appendChild(img)
    itemDiv.appendChild(pName)
    itemDiv.appendChild(pDesc)
    itemDiv.appendChild(pPrice)

    menuDiv.appendChild(itemDiv)
});


export { menuDiv }