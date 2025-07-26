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


/* 
> Excercise #5
*   Programa una función que invierta las palabras de una cadena 
*   de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

function excercise5(){
    cadena = "Hola mundo";
    console.log(`La cadena "${cadena}" al revés es: ${cadena.split("").reverse().join("")}`);
}

const excercise5_1 = (cadena = "") => {
    if (!cadena) return console.warn("Ingresa una cadena...");
    for (let i = cadena.length - 1; i >= 0; i--){
        console.log(cadena[i])
    }
}

const excercise5_2 = (cadena = "") =>
    (!cadena)
    ? console.log("Ingresa una cadena...")
    : console.log(cadena.split("").reverse().join(""));

console.groupCollapsed("Ejercicio 5: ");
excercise5();
console.log("---------- Ejemplo 5.2: ----------")
excercise5_1("Como estas");
console.log("---------- Ejemplo 5.3: ----------")
excercise5_2("Hola mundo");
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #6
*   Programa una función para contar el número de veces que se repite una 
*   palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

cadena2 = "Hola mundo, adios mundo";
palabra = "mundo"
regExp = /mundo/ig;

function excercise6(){
    console.log(`La cadena "${cadena2}" enctrontró la palabra "${palabra}", ${regExp.exec(cadena2)} veces`);
}

const excercise6_1 = (cadena = "", palabra = "") => {
    if(!cadena) return console.warn("Ingresa una cadena...");
    if(!palabra) return console.warn("No ingresaste palabra a validar...");
    
    let i = 0,
        c = 0;
    cadena = cadena.toLowerCase();
    palabra = palabra.toLowerCase()

    while (i !== -1) {
        i = cadena.indexOf(palabra, i);
        if (i !== -1) {
            i ++;
            c ++;
        }
    }

    console.log(`La palabra "${palabra}" se encontro ${c} veces`);
}

console.group("Ejercicio 6: ");
excercise6();
console.log("---------- Ejemplo 6.2: ----------")
excercise6_1("Hola mundo, hola adios mundo", "hola");
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #7
*   Programa una función que valide si una palabra o frase dada, es un palíndromo 
*   (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const excercise7 = (cadena = "") => {
    if(!cadena) return console.warn("No ingresaste una cadena...");
    
    cadena = cadena.toLowerCase();
    
    let palindromo = cadena.split("").reverse().join("");

    return (cadena===palindromo)
    ? console.log(`La palabra "${cadena}" al revés es "${palindromo}", es un palíndromo`)
    : console.log(`La palabra "${cadena}" al revés es "${palindromo}", no es un palíndromo...`)
}

console.group("Ejercicio 7: ");
excercise7("capaz");
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #8
*   Programa una función que elimine cierto patrón de caracteres de un texto 
*   dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const excercise8 = (cadena = "", patron = "") => 
    (!cadena)
    ? console.warn("No ingresaste una cadena...")
    : (!patron)
        ? console.warn("No ingresaste un patrón a eliminar...")
        : console.log(`Se eliminó el patron "${patron}" y quedó así: "${cadena.replaceAll(patron, '')}" `)

console.group("Ejercicio 8: ");
excercise8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.groupEnd();
console.log("--------------------");