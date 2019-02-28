let valores = [];

valores.push(prompt("¿Cuál es tu nombre?"));
valores.push(prompt("¿Cuál es tu apellido?"));
valores.push(prompt("¿Cuál es tu número de tarjeta de crédito?"));
valores.push(prompt("¿Cuál es tu código de seguridad de tarjeta de crédito?"));
let booleano = confirm("¿Te gusta el tenis?")

alert("A " + valores[0] + " "  + valores[1] + " " + (booleano ? "sí" : "no") + " le gusta el tenis");