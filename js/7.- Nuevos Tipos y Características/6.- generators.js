// |---------------- Nuevos Tipos y Características ----------------|
// |------------------------- Generatos ----------------------------|
console.log("------- Generators -------");

/* 
> Generadores
#   ¿Qué son los Generadores?
*       Es una función que nos permite trabajar de manera más amigable
*       con la interfazlos iteradores en un elemento iterable.  */

function* iterable() {                                          // -> '*' para que sea función de tipo generador
    yield "Hola";                                               // -> Son los 'return' de la función iterable
    console.log("Hola consola");
    yield "Hola 2";
    console.log("Seguimos con más instrucciones de nuestro código");
    yield "Hola 3";
    yield "Hola 4";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador) {
    console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function square(valor) {
    setTimeout(() => {
        return console.log({valor, resultado: valor * valor});
    }, Math.random() * 1000);
}

function* generador() {
    console.log("Inicia Generator");
    yield square(0);
    yield square(1);
    yield square(2);
    yield square(3);
    yield square(4);
    yield square(5);
    console.log("Termina Generator");
}

let gen = generador();

for (let y of gen) {
    console.log(y);
}