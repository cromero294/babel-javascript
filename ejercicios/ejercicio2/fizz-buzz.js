const valor = prompt("Di un número");
let respuesta = "";

if (valor % 3 == 0)
    respuesta = "Fizz " + valor;
if (valor % 5 == 0)
    respuesta += " Buzz " + valor

// let respuesta = (valor % 3 == 0) ? "Fizz " + valor : ((valor % 5 == 0) ? "Buzz " + valor : "Fizz-buzz");

console.log(respuesta);