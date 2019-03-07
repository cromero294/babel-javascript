let buttons = document.querySelectorAll('button');

buttons.forEach(x => {
    x.addEventListener('click', evento => {
        jugar(x.textContent);
    });
})

function jugar(valor) {
    let array = {PIEDRA: 0,
                 PAPEL: 1, 
                 TIJERA: 2};

    let array2 = ['TIJERA', 'PIEDRA', 'PAPEL'];

    let num = Math.floor(Math.random() * 3);

    if(array[valor] == num){
        alert(`Has ganado. Tu oponente: ${array2[num]}`);
    }else{
        alert(`Has perdido. Tu oponente: ${array2[num]}`);
    }
}