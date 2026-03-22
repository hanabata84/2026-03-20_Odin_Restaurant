import "./style.css"
import { heroDiv } from "./homePage.js"
import { createOverlay } from "./overlayPage.js";

const content = document.querySelector('#content');
content.appendChild(heroDiv);

const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', ()=> {
    content.replaceChildren();
    content.appendChild(heroDiv);
})

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', ()=>{
    content.replaceChildren();
    content.appendChild(createOverlay("menu"));
})

const aboutBtn = document.querySelector('#about-btn');
aboutBtn.addEventListener('click', ()=>{
    content.replaceChildren();
    content.appendChild(createOverlay("about"))
})