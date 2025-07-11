// |----------------------Tipos de datos------------------------------|
// |-------------------- Valores primitivos --------------------------|
// |---------------- Cadenas/Números/Booleanos -----------------------|
console.log("------- Valores primitivos ------- ");

var hola = "Hola Mundo";
let hello = "Hello World";

console.log(window.hola);
console.log(window.hello);

var musica = "Rock";
console.log("Variable musica antes del bloque: ", musica);
//Bloque
{
  var musica = "Pop";
  console.log("Variable musica dentro del bloque: ", musica);
}

console.log("Variable musica dentro del bloque: ", musica);
console.log("-------------------------");

let musica2 = "Rock";
console.log("Variable musica antes del bloque: ", musica2);

//Bloque
{
  let musica2 = "Pop";
  console.log("Variable musica dentro del bloque: ", musica2);
}

console.log("Variable musica dentro del bloque: ", musica2);
console.log("-------------------------");

const PI = 3.1416;
let PI2;
var PI3;
console.log(PI, PI2, PI3);

const objeto = {
  nombre: "Luis",
  edad: 35,
};

const colores = ["blanco", "negro"];

console.log(objeto);
console.log(colores);
console.log("------------------------------");

objeto.correo = "jaba@gmail.com";
colores.push("Amarillo", "verde", "morado");

console.log(objeto);
console.log(colores);
console.log("------------------------------");

const miObjeto = {
  nombre: "Luis",
  edad: 25,
  vivo: true,
};

(miObjeto.sangre = "O+"), (miObjeto.joto = true), (miObjeto.edad = 15), (miObjeto.joto = false);
console.log(miObjeto);

var cualquierCadena = "Brave new wordl";

document.write("<P>The index of the first w from the beginning is " + cualquierCadena.indexOf("w"));

document.write("<P>The index of the first w from the end is " + cualquierCadena.lastIndexOf("w"));
console.log(cualquierCadena);

/* -----------------------VARIABLES------------------------------ */
console.log("-------- VARIABLES -------- ");
/* --------------PROPIEDADES DE LAS CADENAS---------------------- */

let nombre = "Luis";
let apellido = "Jabalera";
let saludo = new String("Hola Mundo");
let lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";

console.log(
  nombre,
  nombre.length, //-> Dice la longitud
  apellido,
  apellido.length,
  saludo,
  saludo.length
);

console.log(lorem.toUpperCase()); //-> Lo transforma a mayúscula
console.log(lorem.toLowerCase()); //-> Lo transforma a minúscula
console.log(lorem.trim()); //-> Quita los espacios en blanco al inicio y al final del texto
console.log(lorem.split(" ")); // -> Genera un arreglo de separación con comas según el contenido dentro de split

/* -----------------------CARACTERÍSTICAS------------------------------ */
console.log("-------- CARACTERÍSTICAS -------- ");

//Concatenar, juntar dos cadenas de texto
let concat = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(concat);

//Interpolación = meter dentro de una string el valor dinámico de una variable
let interp = `Hola mi nombre es ${nombre} ${apellido}.`;
//                               ↑        ↑
//            Puedes interpolar el nombre de la variable dentro de un texto
console.log(interp);

/* -----------------------NÚMEROS------------------------------ */
console.log("-------- NÚMEROS -------- ");

let a = 2;
let b = new Number(5);
let c = 4.825;
let d = "5.175";

console.log(a, b, c);
console.log(c.toFixed(1)); //-> Cuántos decimales tendrá un valor numérico
console.log(c.toFixed(2)); //-> Cuántos decimales tendrá un valor numérico
console.log(c.toFixed(3)); //-> Cuántos decimales tendrá un valor numérico

console.log(parseInt(c)); //-> Devuelve solo la parte entera
console.log(parseFloat(c)); //-> Devuelve solo la parte flotante
console.log(typeof c, typeof d); //-> De qué tipo son las variables
console.log(c + d); //-> Concatena entero/string y los regresa en cadena
console.log(c + parseInt(d)); //-> Transforma la cadena a entero
console.log(c + parseFloat(d)); //-> Transforma la cadena a decimal

/* -----------------------CONVENCIONAL(BOOLEANOS)------------------------------ */
console.log("-------- CONVENCIONAL(BOL) -------- ");

let verdadero = true;
let falso = false;
let v = Boolean(true);

console.log(verdadero, falso, v);
console.log(typeof verdadero, typeof falso);

/* -----------------------undefine, null, NaN------------------------------ */
console.log("-------- CONVENCIONAL(undefine, null, NaN) -------- ");

// null/undefined = indica un valor ausente, una variable que no tiene valor
// undefined es una variable que no ha sido inicializada
let indefinida;
console.log(indefinida)

// null es un valor especial que indica la ausencia de un valor
let nulo = null;
console.log(null)

//NaN - not a number:
let notANumber = "Hola" * 3.6;
console.log(notANumber);