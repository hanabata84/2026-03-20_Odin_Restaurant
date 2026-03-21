const heroDiv = document.createElement('div');
heroDiv.setAttribute('id', 'hero');

const p1 = document.createElement('p');
p1.textContent = 'Where';
heroDiv.appendChild(p1);

const p2 = document.createElement('p');
p2.setAttribute('id', 'white');
p2.textContent = 'Party Meets';
heroDiv.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent = 'Taste'

heroDiv.appendChild(p3);

export { heroDiv }