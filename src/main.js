import "./style.css"
import { heroDiv } from "./homePage.js"
import { p1 } from "./menuPage.js";
import { p2 } from "./aboutPage.js";

const content = document.querySelector('#content');
content.appendChild(heroDiv);

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', ()=>{
    content.replaceChildren();
    content.appendChild(p1);
})

const aboutBtn = document.querySelector('#about-btn');
aboutBtn.addEventListener('click', ()=>{
    content.replaceChildren();
    content.appendChild(p2)
})