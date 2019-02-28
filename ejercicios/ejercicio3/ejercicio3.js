let num = Math.floor(Math.random()*51);

let turnos = 1;

do {
    var valor = prompt("¿Qué número ha salido?");

    if(num == valor) {
        alert("¡Has ganado un iPhone 7! Y sólo en " + turnos + " turnos.");
    }else{
        alert("Número de turnos: " + turnos + ".\n" + ((valor > num) ? "El número es menor." : "El número es mayor."));
        turnos++;
    }
} while(num != valor);