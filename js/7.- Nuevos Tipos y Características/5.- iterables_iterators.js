// |---------------- Nuevos Tipos y Características ----------------|
// |------------------- Iterables & Iterators ----------------------|
console.log("------- Iterables & Iterators -------");

/* 
> Iterables e iteradores
#   ¿Qué son los iterables y los iteradores?
*       Iterable: significa que es una estructura de datos lineal, que
*       hace que sus elementos sean públicos y se puedan recorrer, ej.
*       arreglos, strings, maps, sets...
*       Es el elemento el cual su contenido se puede reccorer.
*       Iterador: es la interfaz que es una especie de apuntador que va
*       reccoriendo los elementos de la misma estructura de datos.
*       Es el mecanismo que está recorriendo los elemenso.
*       Destructuración, for, for of, array.from, spread, promises  */

// const iterable = [1, 2, 3, 4, 5];
// const iterable = new Set([1, 2, 3, 3, 3, 4, 5, 6, 6]);
// const iterable = "Hola Mundo";
const iterable = new Map([
    ["Nombre", "Luis"],
    ["Apellido", "Jabalera"]
]);
const iterador = iterable[Symbol.iterator]();           // -> Se accede al iterador

console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}