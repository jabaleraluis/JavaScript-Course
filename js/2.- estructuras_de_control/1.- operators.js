// |----------------- Estructuras de control -------------------------|
// |----------------- Operadores Aritméticos --------------------------|
console.log("------- Operadores aritméticos ------- ");

/* 
> Operadores aritméticos
#    +   -
#    *   /
#    %   ()
*/

let a = (5 + 5) * 6/3;
let modulo = 10 % 3;        // -> Devuelve el residuo

console.log(a);
console.log(modulo);

/* 
> Operadores relacionales
#    >   <
#   >=   <=
#   ==   ===
#   !=   !==
*/

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

/* 
*   =   ->  Asignación
*   ==  ->  Comparación
*   === ->  Compara tipo de dato y valor
*/

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

/* 
> Operadores de Incremento | Decremento
*/

let i = 2;

//i = i + 2;
//i += 2;                   -> Incremento simplificado, se puede con todos los operadores /= *= -=

// operador unario
// i++; / ++i,              -> Solo funciona en incremento y decremento
// i--; / --i;              -> Se puede poner al revés / si se asigna al revés, primero suma luego lo asigna
console.log(++i);

/* 
> Operadores lógicos
*   !   -   Not     -> Niega/invierte
*   ||  -   Or      -> Con que una condición se cumpla
*   &&  -   and     -> Ambas condiciones tienen que ser verdadera
*/

console.log(!true);                     // -> true
console.log(!false);

console.log(9 === 9 || ("9" === 9))     //  -> 9 es igual a 9 "O" 9 es igual a "9"
console.log(9 === 9 && ("9" === 9));    //  -> 9 es igual a 9 pero 9 no es igual a "9"
console.log(9 === 9 && ("9" === "9"));  //  -> 9 es igual a 9 "Y" "9" no es igual a "9"