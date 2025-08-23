// |---------------- this en JavaScript ----------------|
// |--------------------- this -------------------------|
console.log("------- this -------");

/* 
> this
#   ¿Qué es 'this' en JavaScript?
*       Hace referencia al objeto en cuestion, es decir el
*       objeto que estamos trabajando, depende mucho del
*       contexto en el que se encuentre.    */

console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";                    // -> Es una variable global, en el window
console.log(this.nombre);

function imprimir() {
    console.log(this.nombre);                       // -> Hace referencia al contexto global
}

{
    //Bloque - Scope - ámbito
}

imprimir();

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre);                   // -> Contexto objeto
    }
}
obj.imprimir();

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir                                        // -> imprimir: imprimir = 'this', hace referencia al contexto de bloque
}
obj2.imprimir();

const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => {                               // -> Las arrow functions no permiten el contexto de bloque
        console.log(this.nombre);                   // -> Enlaza el contexto padre al hijo
    }
}
obj3.imprimir();

function Persona(nombre) {
    this.nombre = nombre

    // return console.log(this.nombre);
    // return function() {                          // -> Global porque crea un nuevo contexto, y no tiene propiedad nombre, se regresa y por eso agarra el contexto global
    //     console.log(this.nombre);
    // }

    return () => console.log(this.nombre);          // -> Output - 'Luis' porque hereda el contexto del padre
}

let luis = new Persona("Luis");
luis();