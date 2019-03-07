var div = document.getElementById('caja');

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
    console.log("Has pasado");
});

div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'white';
    console.log("Has salido");
});

var txt = document.getElementById('texto');

txt.addEventListener('focus', () => {
    txt.style.border = '5px solid green';
});

txt.addEventListener('blur', () => {
    txt.style.border = '';
});