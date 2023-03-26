const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.style.color='red';
para.textContent="hey im red";
container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color='blue';
h3.textContent="im a blue h3";
container.appendChild(h3);

const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');
h1.textContent='im in a div';
p2.textContent='me too';
div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);