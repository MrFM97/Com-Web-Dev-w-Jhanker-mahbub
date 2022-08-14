// Where to add
const placesList = document.getElementById('places-list');
// What to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// add the child
placesList.appendChild(li);


// where to add 
const mainContainter = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

section.appendChild(ul);
mainContainter.appendChild(section);

// set innerHTML directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando</li>
</ul>
`

mainContainter.appendChild(sectionDress);