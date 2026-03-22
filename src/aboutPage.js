import aboutUsImg1 from './assets/about-us-cooking.jpg'
import aboutUsImg2 from './assets/about-us-cooking2.jpg'

const aboutDiv = document.createElement('div');
aboutDiv.setAttribute('id', 'about-container');

const aboutImg1 = document.createElement('img');
aboutImg1.src = aboutUsImg1;

const aboutImg2 = document.createElement('img');
aboutImg2.src = aboutUsImg2;

const aboutDescDiv = document.createElement('div')
aboutDescDiv.setAttribute('id', 'about-item')

const p1 = document.createElement('p');
p1.textContent = "We collaborate for the best taste."

const h3 = document.createElement('h3')
h3.textContent = "From the Soul of Italy"

const p2 = document.createElement('p')
p2.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

aboutDescDiv.appendChild(p1)
aboutDescDiv.appendChild(h3)
aboutDescDiv.appendChild(p2)

aboutDiv.appendChild(aboutImg1)
aboutDiv.appendChild(aboutDescDiv)
aboutDiv.appendChild(aboutImg2)


export { aboutDiv }