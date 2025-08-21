// |---------------- Nuevos Tipos y Características ----------------|
// |------------------------- Proxies ----------------------------|
console.log("------- Proxies -------");

/* 
> Proxies
#   ¿Qué son los Proxies?
*       Es un nuevo mecanismo que permite crear un objeto basado en
*       un objeto literal inicial, similar a las instancias de las
*       clases. Recibe el objeto literal, genera una copia y va a 
*       permitir que se realicen ciertas operaciones dentro de la misma.      */

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

//Aquí se hacen las validaciones, si no hay, solo asignamos los valores
const handler = {
    set(obj, prop, value){                              // -> Va a estar haciendo las validaciones para que no modifique la estructura de la copia del objeto original en el que se está basando
        if (Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad '${prop}' no existe en el objeto.`)
        }
        if (
            (prop === "nombre" || prop === "apellido") &&
            !(/^[A-Za-zÑñÁÉÍÓÚaeiou\s]+$/g.test(value))
        ){
            return console.error(`La propiedad '${prop}' sólo acepta letras y espacios en blanco...`)
        }
        if (
            (prop === "edad") && !(typeof edad !== "number")
        ){
            return console.error()
        }

        obj[prop] = value;
    }
}

const luis = new Proxy(persona, handler);
luis.nombre = "Luis";
luis.apellido = "Jabalera"
luis.edad = 25
luis.instagram = "@jabalera_luis"                       // -> Se le puede agregar ya que con el 'handler' lo genera

console.log(luis);
console.log(persona);