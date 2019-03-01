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

/**
 * Funciones autoejecutables
 */

(function (algo) {
    console.log('Función autoejecutable ' + algo);
}('algo'));

!!function (algo) {
    console.log('Función autoejecutable ' + algo);  
}('algo');

(function (algo) {
    console.log('Función autoejecutable ' + algo);  
})('algo');

console.log('----------------------------------------');

/**
 * Scope/Ambito
 */

function sum(x, y) {
    resultado = x + y;
    return resultado;
}

function resta(x, y) {
    var resultado = x - y;
    return resultado;
}

sum(5, 5);
resta(6, 2);
console.log(resultado);

console.log('----------------------------------------');

/**
 * Objetos/Diccionarios
 */

const coche = {
    marca: "Tesla",
    modelo: "Model S3",
    color: "negro"
};

let prop = 'marca'

console.log(coche.marca);
console.log(coche['marca']); // Mejor usar la primera
console.log(coche[prop]);

console.log(coche.color);
coche.color = 'blanco';
console.log(coche.color);

console.log(coche);
delete coche.modelo;
console.log(coche);
coche.modelo = "Model X";
console.log(coche);

coche.pitar = function() {
    console.log("PIIIIIII");
}
coche.pitar();

console.log('----------------------------------------');

/**
 * Clases con funciones
 */

function Coche(marca, modelo, color, sonido) {
    this.marca = marca;
    this.modelo = modelo;
    this.sonido = sonido;
    this.color = color;
}

Coche.prototype.pitar = function() {
                            console.log(this.sonido);
                        }

let seat = new Coche("Seat", "Ibiza", "verde", "PI PI PI");
console.log(seat);

let bmw = new Coche("BMW", "120", "blanco", "PA");
console.log(bmw);

console.log('----------------------------------------');

function Serie(titulo, episodios, episodios_vistos) {
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodios_vistos = episodios_vistos;
}

Serie.prototype.porVer = function() {
                            return this.episodios - this.episodios_vistos;
                        }

Serie.prototype.finalizada = function() {
                            return (this.porVer() == 0);
                        }

let brbad = new Serie("Breaking bad", 50, 50);
let got = new Serie("Game of Thrones", 80, 70);
let madmen = new Serie("Mad Men", 90, 50);
let mrrobot = new Serie("Mr. Robot", 40, 39);

let series = [brbad, got, madmen, mrrobot];

const no_finalizadas = series.filter(function(serie) {
    return !serie.finalizada();
});

console.log(no_finalizadas);

console.log('----------------------------------------');

console.log(Math.PI);

console.log('----------------------------------------');

texto = "Paco viene con las rebajas."
t1 = texto.replace("a", "*");
console.log(t1);

texto = "Paco viene con las rebajas."
t1 = texto.replace(/a/g, "*");
console.log(t1);

console.log('----------------------------------------');

function palindromo(text) {
    t1 = text.toLowerCase().replace(/ /g, "");

    let t = t1.split("");
    let tr = t1.split("").reverse();

    return (t.join("") == tr.join(""));
}

console.log(palindromo("sugus"));
console.log(palindromo("juan"));
console.log(palindromo("hol aL oh"));

console.log('----------------------------------------');

// function filter(array, funct){
//     const arr2 = [];

//     for(elem of array){
//         if(funct(elem)){
//             arr2.push(elem);
//         }
//     }

//     return arr2;
// }

/**
 * Función de Callback
 */

function filter(array, funct){
    const arr2 = [];
    array.forEach(function(elem) {
        if(funct(elem)){
            arr2.push(elem);
        }
    });
    return arr2;
}

console.log(filter([1, 2, 3, 4], function(i) {
    if((i % 2 != 0)){
        return true;
    }
}));

console.log(filter(["hola", "sugus", "holaaloh", "PepE"], palindromo));

console.log('----------------------------------------');

/**
 * Fechas (libreria "Moment.js")
 */

var hoy = new Date();
console.log(hoy);

console.log('----------------------------------------');
