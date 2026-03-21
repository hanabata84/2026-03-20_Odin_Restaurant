import "./style.css"
import { heroDiv } from "./homePage.js"
import { p1 } from "./menuPage.js";

const content = document.querySelector('#content');
content.appendChild(heroDiv);

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', ()=>content.appendChild(p1))