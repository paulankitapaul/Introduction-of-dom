// parent node
const mainContainer = document.getElementById('main-container');
// child node
const placesSection = document.createElement('section');
const h1= document.createElement('h1');
h1.innerText='Country i want to visit';
placesSection.appendChild(h1);
const ul = document.createElement('ul')
placesSection.appendChild(ul)
const li1 = document.createElement('li')
li1.innerText='sundarbon';
const li2 = document.createElement('li')
li2.innerText='bandorbon';
const li3 = document.createElement('li')
li3.innerText='katabon';
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

// append child
mainContainer.appendChild(placesSection)
const booksSection = document.createElement('section')
booksSection.innerHTML = `
<h1>The list of book i read</h1>
<ul>
<li>Bangla</li>
<li>Physics</li>
<li>Chemistry</li>
</ul>
`
mainContainer.appendChild(booksSection)