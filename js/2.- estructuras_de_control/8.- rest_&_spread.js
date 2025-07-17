// |----------------- Estructuras de control -------------------------|
// |------------ Parámetros REST y Operador Spread -------------------|
console.log("------- REST Parameters and Spread Operator ------- ");

/* 
> REST Parameters and Spread Operator
#   Parámetro REST
*       Son una forma de virtualmente ir agregando
*       parámetros infinitos ya sea a una función o 
*       dentro de una variable */

function sumar (a, b, ...x) {
    let resultado = a + b;

    x.forEach (function(n){
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1, 2,));
console.log(sumar(1,2,5,6));            // -> El parámetro "x" es el que recibe los valores y lo suma de acuerdo a los valores que se reciban
console.log(sumar(1,4,3,7,3,2));        // -> Pueden ser "n" valores


console.log("------------------------------");

/*
> REST Parameters and Spread Operator
#   Spread Operator
*       Nos permite expander una expresión donde se
*       tengan que guardar o almacenar múltiples,
*       argumentos o elementos */

const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, arr2, 11, 12, 13, 14, 15];    // -> Poniendo los puntos suspensivos, agarra solo los datos, no el arreglo
console.log(arr3);