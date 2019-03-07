let div = document.getElementById('caja');
let input = document.querySelector('input');

topPos = 0;
rightPos = 0;
leftPos = 0;
bottomPos = 0;

input.addEventListener('keydown', event => {
    if(event.key == "ArrowLeft") {
        rightPos += 5;
        div.style.right = rightPos + "px";
    }else if(event.key == "ArrowRight") {
        rightPos -= 5;
        div.style.right = rightPos + "px";
    }else if(event.key == "ArrowDown") {
        topPos += 5;
        div.style.top = topPos + "px";
    }else if(event.key == "ArrowUp") {
        topPos -= 5;
        div.style.top = topPos + "px";
    }
});