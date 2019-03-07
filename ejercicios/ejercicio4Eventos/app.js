let caja = document.getElementById('caja');
let button = document.getElementById('btn');

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log("Hola, estás pulsando un botón.");
});

caja.addEventListener('click', event => {
    console.log("Hola, estás pulsando una caja.");
});