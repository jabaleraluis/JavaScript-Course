/* 
> Excercise #1
*    Programa una función que cuente el número de caracteres de una 
*    cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
> Excercise #2
*    Programa una función que te devuelva el texto recortado según el 
*    número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
> Excercise #3
*    Programa una función que dada una String te devuelva un Array de textos 
*    separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
> Excercise #4
*    Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
*    devolverá Hola Mundo Hola Mundo Hola Mundo.    */

let cadena = "Hola mundo";


//> #1
function excercise1(){
    console.log(`La longitud de la cadena "${cadena}" es de: ${cadena.length}`);
}

const excercise1_1 = (cadena = "") => 
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena...")
    : console.log(`La longitud de la cadena "${cadena}" es de: ${cadena.length}`);


console.group("Ejercicio 1: ");
excercise1();
excercise1_1("Hola mundo");
console.groupEnd();
console.log("--------------------");

//> #2
function excercise2(){
    recorte = 10;
    if (recorte > 10) {
        console.warn(`La cantidad ${recorte} de recorte es mayor que el texto...`);
    } else {
        console.log(`El texto recortado de "${cadena}" con ${recorte} recortes es: "${cadena.slice(0, recorte)}"`);
    }
}

//str = prompt("Ingrese un texto: ");
//sli = prompt("Ingrese cantidad de recorte: ");

const excercise2_1 = (str = "", sli = undefined) =>
    (!str)
    ? console.warn("No ingresaste una cadena...")
    : (sli > str.length)
        ? console.warn(`La cantidad ${sli} de recorte es mayor que el texto...`)
        : (sli === null || sli === undefined || sli === "")
            ? console.warn("No ingresaste un número de recorte...")
            : (isNaN(sli))
                ? console.error("Sólo se permiten números...")
    : console.log(`El texto recortado de "${str}" con ${sli} recortes es: "${str.slice(0, sli)}"`)

console.group("Ejercicio 2: ");
excercise2();
console.log("---------------");
excercise2_1(str = "Hola Mundo", sli = 7);
//excercise2_1(str, sli);
console.groupEnd();
console.log("--------------------");

//> #3
let cadena2 = "Hola que tal";

function excercise3(){
    separador = " ";
    console.log(`La cadena "${cadena2}" separada por "${separador}" queda de la siguiente manera: ${cadena2.split(separador)}`)
}

str1 = "Hola asdque tal",
spl = "H";

const excercise3_1 = (str1 = "", spl = undefined) =>
    (!str1)
    ? console.warn("No ingresaste una cadena...")
    : (spl === undefined)
        ? console.log("Ingresa un separador...")
    : console.log(`La cadena "${str1}" separada por "${spl}" queda de la siguiente manera: ${str1.split(spl)}`)

console.group("Ejercicio 3: ");
excercise3();
excercise3_1(str1, spl);
console.groupEnd();
console.log("--------------------");

//> #4
function excercise4(){
    repetir = 5;
    console.log(`La cadena "${cadena}" se repite "${repetir}" veces, y queda así: ${cadena.repeat(repetir)}`);
}

console.group("Ejercicio 4: ");
excercise4();
console.groupEnd();
console.log("--------------------");