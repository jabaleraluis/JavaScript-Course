// |----------------- Estructuras de control -------------------------|
// |--------------------- Condicionales ------------------------------|
console.log("------- Condicionales ------- ");

/* 
> Estructuras de control
#   ¿Qué es una estructura de control?
*       Es aquel mecanismo que permite controlar el 
*       flujo de la programación.
*
> Tipos de estructuras
#   1.- Condicionales
*       Dependiendo la evaluación de una condición
*       se ejecutan ciertas acciones u otras.
#   2.- Loops
*       Son estructuras repetitivas.

> 1.- Condicionales
# if-else
*   Permite tomar una decisión, si esta condición se 
*   cumple ejecuta ciertas acciones. */
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad!")
} else{
    console.log("No eres mayor de edad:(")
}

/* 
# if anidados
*   if-else else if else if
0hr   -  5hr   -> Déjame dormir
6hr   -  11hr  -> Buenos días
12hr  -  18hr  -> Buenas tardes
19hr  -  24hr  -> Buenas noches
*/

let hora = 5;

if (hora >= 0 && hora <=5) {
    console.log("Déjame dormir")
} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos días")
} else if (hora >= 12 && hora <= 18 ) {
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}

/* 
# Operador ternario
*   (condición) ? true : false
*/

let mayorEdad = (edad >= 18) 
? "Eres mayor de edad:)"            // -> La primera es si se cumple - //* TRUE
: "No eres mayor de edad:(";        // -> La segunda es si no se cumple - //* FALSE
console.log(mayorEdad);

/* 
# Switch case
*   switch (key) {
*       case value:
*           break;
*       default:
*           break;
*   }

Domingo     -       0
Lunes       -       1
Martes      -       2
Miércoles   -       3
Jueves      -       4
Viernes     -       5
Sábado      -       6
*/

let dia = 2;

switch (dia) {
    case 0:
        console.log("Hoy es Domingo")
        break;
    case 1:
        console.log("Hoy es Lunes")
        break;
    case 2:
        console.log("Hoy es Martes")
        break;
    case 3:
        console.log("Hoy es Miércoles")
        break;
    case 4:
        console.log("Hoy es Jueves")
        break;
    case 5:
        console.log("Hoy es Viernes")
        break;
    case 6:
        console.log("Hoy es Sábado")
        break;
    default:
        console.log("El día no existe:(")
}