console.log('Hola mundo!')
num = 4
console.log(num)
num = 'Un num'
console.log(num)
var texto = 'Un texto';
let otroTexto = "Otro texto";
const UNTEXTO = "UN TEXTO";

console.log('----------------------------------------');

/**
 * VAR VS LET
 */

var n = 1;
let m = 1;

let j; // Undefined
console.log(j)

if (true) {
    h = 10; // Variable global
    var n = 2;
    let m = 2;

    console.log('Dentro: ' + n)
    console.log('Dentro: ' + m)
}

console.log('Fuera: ' + n)
console.log('Fuera: ' + m)

console.log('----------------------------------------');

/**
 * Tipos
 */

console.log('Paco dijo: \'Hola, te vienes?\'');
console.log("Paco dijo: 'Hola, te vienes?'");

console.log('----------------------------------------');

let dias = ['lunes', 'martes', 'miercoles'];
let diasArray = new Array('lunes', 'martes', 'miercoles');

console.log(dias);
console.log(diasArray);

console.log(dias[1]);

dias.push('jueves');
console.log(dias);

dias[0] = 'domingo';
console.log(dias);

dias[4] = 'sabado';
dias[6] = 'nada';
console.log(dias);

console.log('----------------------------------------');

// alert("Un mensaje");
// console.log(confirm("Devuelve true o false"));
// console.log(prompt("Devuelve el valor"));
// console.dir(document.querySelector('h1'));
console.warn("Cuidado");
console.error("Error");
console.info("Información");
console.table({nombre: "Mario", apellido: "Calle"});

console.log('----------------------------------------');

// valor = booleano

// (valor ? "si" : "no") // operador ternario

console.log('----------------------------------------');

for(let i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}

console.log('----------------------------------------');

for(let i in dias) {
    console.log(i);
    console.log(dias[i]);
}

console.log('----------------------------------------');

for(let i of dias) {
    console.log(i);
}

console.log('----------------------------------------');

let persona = {
    nombre: 'Robb',
    apellido: 'Stark'
};

for(let i in persona) {
    console.log(persona[i]);
}

console.log();

for(let i of Object.values(persona)) {
    console.log(i);
}

console.log();

for(let i of Object.keys(persona)) {
    console.log(i);
}

console.log('----------------------------------------');

function saludar(nombre) {
    console.log(arguments);
    console.log("Hola " + nombre);
}

saludar("Pepito");
saludar("Pepe Viyuela", 2, 3, 'eii');
saludar();

console.log('----------------------------------------');

function factorial(num) {
    if (num <= 1) {
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

console.log(factorial(3));

console.log('----------------------------------------');

let fn1 = function () {
    console.log('Expresion');
}

fn1();

[1, 2, 3, 4].forEach(function (x) {
    console.log(x);
});

const nums = [1, 2, 3, 4];

const numsX2 = nums.map(function(num) {
    return num *2;
});

console.log(numsX2);

function menor7(num) {
    return num < 7;
}

const numsMenoresA7 = numsX2.filter(menor7);

console.log(numsMenoresA7);

const sumaNums = nums.reduce(function(acc, num) {
    return acc += num;
}, 0);

console.log(sumaNums);

console.log('----------------------------------------');