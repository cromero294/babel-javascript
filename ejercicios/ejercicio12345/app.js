let ul = document.querySelector('ul');

let nodo2 = document.createElement('li');
let texto2 = document.createTextNode('2');
nodo2.appendChild(texto2);
ul.insertBefore(nodo2, ul.children[1]);

let nodo4 = document.createElement('li');
let texto4 = document.createTextNode('4');
nodo4.appendChild(texto4);
ul.replaceChild(nodo4, ul.children[3]);
