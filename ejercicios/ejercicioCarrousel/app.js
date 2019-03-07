let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');

btn2.addEventListener('click', () => {
    let imagenes = document.getElementsByTagName('div');
    for(let img of imagenes[0].children) {
        if(img.hasAttribute('id')){
            img.removeAttribute('id');
            img.setAttribute('style', 'display: none;');
            if(imagenes[0].lastChild.previousSibling == img){
                img = imagenes[0].firstChild.nextSibling;
                img.removeAttribute('style');
                img.setAttribute('id', 'mostrar');
                break;
            }
            img.nextSibling.nextSibling.removeAttribute('style');
            img.nextSibling.nextSibling.setAttribute('id', 'mostrar');
            break;
        }
    }
});

btn1.addEventListener('click', () => {
    let imagenes = document.getElementsByTagName('div');
    for(let img of imagenes[0].children) {
        if(img.hasAttribute('id')){
            img.removeAttribute('id');
            img.setAttribute('style', 'display: none;');
            if(imagenes[0].firstChild.nextSibling == img){
                img = imagenes[0].lastChild.previousSibling;
                img.removeAttribute('style');
                img.setAttribute('id', 'mostrar');
                break;
            }
            img.previousSibling.previousSibling.removeAttribute('style');
            img.previousSibling.previousSibling.setAttribute('id', 'mostrar');
            break;
        }
    }
});