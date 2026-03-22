import { menuDiv } from "./menuContainer.js";

function createOverlay(page) {
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay')

    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    if (page === 'menu') {
        h2.textContent = 'Menu';
        p.textContent = 'pizza | toppings | cheese'
        overlay.appendChild(h2);
        overlay.appendChild(p);
        overlay.appendChild(menuDiv)
    } else {
        h2.textContent = 'About Us';
        p.textContent = 'special moments'
        overlay.appendChild(h2);
        overlay.appendChild(p);
    }

    return overlay;
}

export { createOverlay }