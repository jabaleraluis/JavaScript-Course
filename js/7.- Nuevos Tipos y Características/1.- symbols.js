// |---------------- Nuevos Tipos y Características ----------------|
// |------------------------ Symbols ---------------------------|
console.log("------- Symbols -------");

/* 
> Symbols
#   ¿Qué son los Symbols?
*       Es un tipo de datos primitivo (string, number, boolean), su valor
*       se mantiene privado y para uso interno, suelen agregarse como 
*       características de objetos, como una propiedad, y se mantiene privada.  
*       Nos permiten crear identificadores únicos, de referencia.   */

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);


//* ¿Cómo le agregamos un Symbol a un objeto?

const NAME = Symbol();
const SALUDAR = Symbol("Saludar");      // -> Se puede ir guardando así para identificar a qué símbolo estoy llamando o haciendo referencia

const persona = {
    [NAME] : "Luis",
    edad: 35
}

console.log(persona);                   // -> Puede servir para mantener privada la propiedad

persona.NAME = "Luis Jabalera";         // -> No afecta la propiedad de Symbol()

console.log(persona);
console.log(persona.NAME);
console.log(persona[NAME]);             // -> Te da el valor de la referencia dentro de ese Symbol()


//* ¿Cómo le agregamos un Symbol a un método (función)?

persona[SALUDAR] = function () {
    console.log("Hola");
}

console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}

// Cómo listo los symbolos, los atributos privados de los métodos
console.log(Object.getOwnPropertySymbols(persona));