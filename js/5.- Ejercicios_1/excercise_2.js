/* 
> Excercise #5
*   Programa una función que invierta las palabras de una cadena 
*   de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
> Excercise #6
*   Programa una función para contar el número de veces que se repite una 
*   palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
> Excercise #7
*   Programa una función que valide si una palabra o frase dada, es un palíndromo 
*   (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
> Excercise #8
*   Programa una función que elimine cierto patrón de caracteres de un texto 
*   dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

cadena = "Hola mundo";

//> #5
function excercise1(){
    console.log(`La cadena "${cadena}" al revés es: ${cadena.split("").reverse().join("")}`);
}

console.group("Ejercicio 5: ");
excercise1();
console.groupEnd();
console.log("--------------------");

//> #6
cadena2 = "Hola mundo, adios mundo";
palabra = "mundo"

function excercise2(){
    console.log(`La cadena "${cadena2}" enctrontró la palabra "${palabra}", ${cadena2.match(regExp)} veces`);
}

console.group("Ejercicio 6: ");
excercise2();
console.groupEnd();
console.log("--------------------");