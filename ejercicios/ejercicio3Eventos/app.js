let p = document.querySelector('p');
let input = document.querySelector('input');

input.addEventListener('keydown', evento => {
    p.textContent += evento.code;
});