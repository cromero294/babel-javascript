turno = 1;
puntos = 0;
puntosCasa = 0;

do{
    volver = true;
    opc = confirm(`Turno: ${turno}. Tus puntos: ${puntos}. Puntos de la casa: ${puntosCasa}. ¿Quieres algún número?`);

    if(opc){
        puntos += Math.floor((Math.random() * 10) + 1);

        if(puntos > 20) {
            volver = confirm(`Has perdido. Tus puntos: ${puntos}. Puntos de la casa: ${puntosCasa}. ¿Quieres volver a jugar?`);
            turno = 0;
            puntos = 0;
            puntosCasa = 0;
        }
    }else{
        while(puntosCasa <= 17){
            puntosCasa += Math.floor((Math.random() * 10) + 1);
        }
        if(puntosCasa <= 20){
            volver = confirm(((puntos > puntosCasa) ? "¡Has ganado!" : "Has perdido.") + `Tus puntos: ${puntos}. Puntos de la casa: ${puntosCasa}. ¿Quieres volver a jugar?`);
        }else{
            volver = confirm(`¡Has ganado! Tus puntos: ${puntos}. Puntos de la casa: ${puntosCasa}. ¿Quieres volver a jugar?`);
        }
        turno = 0;
        puntos = 0;
        puntosCasa = 0;
    }
    turno++;
}while(volver);