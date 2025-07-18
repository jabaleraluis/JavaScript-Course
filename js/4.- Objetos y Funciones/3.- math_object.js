// |--------- Objetos y Funciones del Lenguaje -----------------|
// |------------------- Math Object -------------------------|
console.log("------- Console Math ------- ");

/* 
> Objecto Math
#   ¿Qué es el Objeto Math?
*       
*/

console.log(Math);
console.log(Math.PI);                       // -> Número PI
console.log(Math.abs(-7.8));                // -> Devuelve el valor absoluto de un número (no considera si es negativo o positivo)

//# Redondear
console.log(Math.ceil(7.2));                // -> Redondea al mayor entero
console.log(Math.floor(7.6));               // -> Redondea al menor entero
console.log(Math.round(7.5));               // -> Redondea normal, al más cercano

console.log(Math.sqrt(81));                 // -> Raíz cuadrada
console.log(Math.pow(2, 5));                // -> Saca la potencia, 1er: Número base, 2do: Potencia

console.log(Math.sign(-7.8));               // -> Si es negativo devuelve -1, si es 0 devuelve 0, si es positivo da 1 positivo

console.log(Math.random());                 // -> Número aleatorio entre 0 - 1

//Número aleatorio entre 0 - 100
console.log(Math.round(Math.random()*100));