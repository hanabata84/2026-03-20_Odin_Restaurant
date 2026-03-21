import { menuDiv } from "./menuContainer.js";

const menuOverlay = document.createElement('div');
menuOverlay.setAttribute('class', 'overlay')

const h2 = document.createElement('h2');
h2.textContent = 'Menu';

const p = document.createElement('p');
p.textContent = 'pizza | toppings | cheese'

menuOverlay.appendChild(h2);
menuOverlay.appendChild(p);
menuOverlay.appendChild(menuDiv);

export {menuOverlay}