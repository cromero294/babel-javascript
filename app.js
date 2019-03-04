// import { Mascota as M, NUM} from './mascota.mjs'
// const Mascota = require('./mascota.js');

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

console.log("VAR VS LET");

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

console.log("TIPOS");

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

console.log("POPUPS");

// alert("Un mensaje");
// console.log(confirm("Devuelve true o false"));
// console.log(prompt("Devuelve el valor"));
// console.dir(document.querySelector('h1'));
console.warn("Cuidado");
console.error("Error");
console.info("Información");
console.table({nombre: "Mario", apellido: "Calle"});

console.log('----------------------------------------');

console.log("OPERADOR TERNARIO");

// valor = booleano

// (valor ? "si" : "no") // operador ternario

console.log('----------------------------------------');

console.log("FOR");

for(let i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}

for(let i in dias) {
    console.log(i);
    console.log(dias[i]);
}

for(let i of dias) {
    console.log(i);
}

console.log('----------------------------------------');

console.log("BUCLES");

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

console.log("FUNCIONES");

function saludar(nombre) {
    console.log(arguments);
    console.log("Hola " + nombre);
}

saludar("Pepito");
saludar("Pepe Viyuela", 2, 3, 'eii');
saludar();

console.log('----------------------------------------');

console.log("RECURSIVA");

function factorial(num) {
    if (num <= 1) {
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

console.log(factorial(3));

console.log('----------------------------------------');

console.log("FUNCIONES MAP/FILTER...");

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
console.log("AUTOEJECUTABLES");

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

console.log("SCOPE");

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

console.log("OBJETOS/DICCIONARIOS");

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

console.log("CLASES");

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

console.log("MATH");

console.log(Math.PI);

console.log('----------------------------------------');

console.log("STRING");

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

console.log("CALLBACK");

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

console.log("DATE");

var hoy = new Date().toTimeString();
console.log(hoy);

var hoy = new Date(1992, 04, 03);

console.log('----------------------------------------');

/**
 * Math
 */

console.log(Math.random());

console.log('----------------------------------------');

/**
 * JSON
 */

console.log("JSON");

persona = {
    nombre: "Mario",
    apellido: "Calle"
}

var pj = JSON.stringify(persona)

console.log(pj);
console.log(JSON.parse(pj))

console.log('----------------------------------------');

console.log("ECMA6");

/**
 * ECMA6
 */

 // let
 // const
 // for ... of ...

 //template literals
const persona1 = {
    nombre: "Mario",
    apellido: "Calle"
};

console.log(`Me llamo ${persona1.nombre} ${persona1.apellido}`);
console.log("Me llamo\n " + persona1.nombre + "\n " + persona1.apellido + "\n");
console.log(`Me llamo: 
        Nombre: ${persona1.nombre} 
        Apellidos: ${persona1.apellido}
        2+2: ${2+2}`);
    
 // lambda
a = function() {
    console.log("Hola");
}

b = () => console.log("Hola");

c = num => console.log(num);

d = (x, y) => console.log(x + y);

e = (n1, n2) => n1+n2;
e2 = (n1, n2) => {
    return n1+n2;
}

console.log(e(1,1));
console.log([1, 2, 3, 4].map((x, y) => x * y));

console.log('----------------------------------------');

const pelicula = {
    titulo: "Una película",
    anyadirAnyo: function(anyo) {
        this.anyo = anyo;
        self = this;
        console.log(this.anyo);
        // const cb = function() {
        //     console.log(this);
        //     console.log(self);
        // };
        cb = () => console.log(this);
        cb();
    }
}

pelicula.anyadirAnyo(2018);

console.log('----------------------------------------');

function getNumLoteria(n1,...nums) {
    console.log(`Sorteo: ${n1}: ${nums}`);
}

getNumLoteria(2, 3, 4, 5, "hola");

let numeros = [1, 2, 3, 4, 5, 6]

let max = Math.max(...numeros);
let max2 = Math.max(1, 2, 3, 4, 5, 6);

const {nombre, apellido} = persona1;
console.log(`${nombre} ${apellido}`);

// const [s1, ...series] = misSeries;
// const [, s2] = misSeries;

console.log('----------------------------------------');

class CocheCoche {
    constructor(marca, modelo, sonido, color, owner){
        this.marca = marca;
        this.modelo = modelo;
        this.sonido = sonido;
        this.color = color;
        var _owner = owner;
        this.getOwner = () => _owner;
        this.setOwner = (x) => { _owner = x; }
    }
    pitar() {
        console.log(this.sonido);
    }
    static getNumRuedas() {
        return 4;
    }
}

const audi = new CocheCoche('Audi', 'A4', 'PIIIII', 'negro', 'Pepito');
audi.pitar();
console.log(audi.marca);
console.log(CocheCoche.getNumRuedas());
console.log(audi._owner);
console.log(audi.getOwner());
audi.setOwner('Juan Carlos');
console.log(audi.getOwner());

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    getArea() {
        return this.ancho * this.alto;
    }
}

class Cuadrado extends Rectangulo{
    constructor(lado) {
        super(lado, lado);
    }
}

const c1 = new Cuadrado(3);
console.log(c1.getArea());

// const perro = new Mascota('Toby', 'perro');
// const gato = new Mascota('Felix', 'gato');
