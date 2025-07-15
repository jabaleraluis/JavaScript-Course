// |----------------- Estructuras de control -------------------------|
// |--------------------- Destructuring ------------------------------|
console.log("------- Destructuring ------- ");

/* 
> Destructuring
#   ¿Qué es el Destructuring?
*       Es una nueva forma de asignar valores
*       a arreglos u objetos. */

//# Sin destructuración
const numeros = [1, 2, 3];

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log("Sin destructuración: ");
console.log(uno, dos, tres);

console.log("-----------------------------");
/* 
# Con destructuración
*   Sirve para cuando necesito guardar las variables 
*   independientes de un objeto porque necesito generar un 
*   template HTML dinámico u operaciones aritméticas, etc.  */

const [one, two, three] = numeros;
console.log("Con destructuración: ");
console.log(one, two, three);

const persona = {
    nombre: "Luis",
    apellido: "Jabalera",
    edad: 25
}

let {nombre, apellido, edad:age} = persona;          // ->  Se tiene que referenciar exactamente a lo que se está accediento
console.log(nombre, apellido, age);                  // ->  Se puede reasignar con "edad:age"