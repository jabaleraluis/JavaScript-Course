// |---------------- Nuevos Tipos y Características ----------------|
// |---------------------- Computed Property ------------------------|
console.log("------- Computed Property -------");

/* 
> Computed Property
#   ¿Qué son las Propiedades dinámicas de los objetos?
*       Crea propiedades al vuelo de manera dinámica en un objeto,
*       se refiere a la posibilidad de tener nombres de propiedades
*       de objetos cuyos nombres de pueden determinar en tiempo de
*       ejecución   */

let random = Math.round(Math.random() * 100 + 5);

const objUsuarios = {
    propiedad: "Valor",                                                         // -> Propiedad normal
    [`id_${random}`]: "Valor Aleatorio"                                         // -> Siempre con la notación de los '[]'
}
console.log(objUsuarios);

const usuarios = ["Luis", "Juan", "Pepe", "Valentin"];
usuarios.forEach((user, index) => objUsuarios[`id_${index}`] = user);           // -> O se pueden crear dinámicamente

console.log(objUsuarios);