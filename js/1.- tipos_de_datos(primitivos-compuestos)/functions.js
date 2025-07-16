// |----------------------Tipos de datos------------------------------|
// |-------------------- Functions/Funciones --------------------------|
console.log("------- Functions/Funciones ------- ");

/*
> FUNCIONES
#   ¿Qué son las funciones?
*     Una función es un bloque de código,
*     autocontenido, que se puede definir una
*     vez y ejecutar en cualquier momento.
*     Opcionalmente, una función puede aceptar
*     parámetros y devolver un valor. */

// > Declaración de función
function miFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

// > Invocación de funciones ()
miFuncion();
//miFuncion();        ->  Se puede ejecutar las veces que sea necesario

console.log("----------------------------------");

function returnValue() {
  let n1 = 10;
  let n2 = 20;
  return n1 + n2;                                   // -> Cuando se retorna, lo que sigue después de la función se ignora
  console.log("tres");                              // -> Se ignora
  return "La función retorna una cadena de texto";  // -> Se ignora
}

let valueFromReturnValue = returnValue();
// console.log(valueFromReturnValue);

function saludar(nombre, edad) {
  console.log(`Hola mi nombre es: ${nombre} y tengo ${edad} años.`);
//console.log("Hola mi nombre es: " + nombre + " y tengo " + edad + " años.");
}

saludar("Luis", 25);
saludar();

console.log("----------------------------------");

// > Funciones declaradas vs funciones expresadas

// ? Función declarada
funcionDeclarada();   // -> Antes de su declaración ✔
function funcionDeclarada(){
  console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, antes que la función sea declarada")
}
funcionDeclarada();   // -> Después de su declaración ✔

// ? Función expresada 
// funcionExpresada(); -> Antes de su declaración ✘
// Función anónima = una función que no tiene nombre, y se la estámos asignando como valor a una variable
const funcionExpresada = function() {     // -> Puede ser así
  console.log("Esto es una función expresada, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición, js nos dirá que no se puede acceder antes de la inicialización")
}
funcionExpresada();   // -> Después de su declaración ✔

const funcionExpresadaUnnamed = () => {   // -> Arrow function, también puede ser así

}