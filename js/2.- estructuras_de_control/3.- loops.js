// |----------------- Estructuras de control -------------------------|
// |------------------------- Loops ----------------------------------|
console.log("------- Loops ------- ");

//# While
let cont = 0;

while (cont < 10) {
    console.log("While: " + cont);
    cont++;
}

//# Do While
do {
    console.log("Do while: " + cont);
    cont++;
} while (cont <= 10);

/* 
> Diferencias
#   while
*       Antes de empezar a ejecutar las líneas de código, 
*       la condición se tiene que cumplir.
#   Do While
*       Siempre se va a ejecutar el primer bloque antes  
*       de la condición. */

//> For
console.log("------- For ------- ");
for (let i = 0; i < 10; i++) {
    console.log("For: " + i);
}

let numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let j = 0; j <= numbers.length; j++) {
  console.log(numbers[j]);
}

/*
> For In
*   Permite recorrer o iterar las propiedades 
*   de un objeto primitivo.
*   (For especial para un objeto) */

const luis = {
    nombre: "Luis",
    apellido: "Jabalera",
    edad: 25
}

for (const property in luis) {
    console.log(`Indicador: ${property} - Valor: ${luis[property]}`);
}

/*
> For Of
*  Permite recorrer todos los elementos de
*  cualquier objeto que sea iterable.          //#  -> iterable:
*  (sirve más para arreglos []). aun que       //*  -> que se pueda partir en diferentes posiciones
*  no específicamente. */

for (const iterator of numbers) {
    console.log(iterator);
}

let string = "Hola mundo";

for (const caracter of string) {
    console.log(caracter);
}