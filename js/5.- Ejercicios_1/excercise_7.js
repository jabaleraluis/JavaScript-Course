/* 
> Excercise #21
*   Programa una función que dado un array numérico devuelve otro array
*   con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
> Excercise #22
*   Programa una función que dado un array devuelva el número mas alto y el 
*   más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
> Excercise #23
*   Programa una función que dado un array de números devuelva un objeto con 2 
*   arreglos en el primero almacena los números pares y en el segundo los impares, 
*   pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

/*
> Excercise #21
*   Programa una función que dado un array numérico devuelve otro array
*   con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].  */

const excercise21 = (array = []) => {
    if (array.length === 0 || array === undefined) return console.warn("Introduzca números al arreglo...");
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            console.error(`El tipo de dato en "${array[i]}" no es un número...`);
        }
    }
    
    array.forEach(function (e, i){
        potencia = array[i] * e;
        console.log(`El número ${e} al cuadrado es ${potencia}`);
    })

    // const potencias = array.map(e => e ** 2); // o Math.pow(e, 2)
    // return potencias;
}

const excercise21_1 = (arr = undefined) => {
    if (arr === undefined) return console.warn("Ingresa un arreglo...");
    if (!(arr instanceof Array)) return console.error("No es un arreglo...");
    if (arr.length === 0) return console.warn("El arreglo está vacío...");
    for (let n of arr) {
        if (typeof n !== "number") console.error(`El tipo de dato ${n} no es un número...`);
    }

    const newArr = arr.map(e => e * e);
    return console.log(`El arreglo original es "${arr}",\nelevado al cuadrado es "${newArr}"`);
}

console.group("Ejercicio 21: ");
excercise21([8, 5]);
excercise21_1([2, 4]);
// console.log(excercise21([1, 2, 3, 4, 5]));
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #22
*   Programa una función que dado un array devuelva el número mas alto y el 
*   más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

const excercise22 = (array = []) => {
    if (array.length === 0 || array === undefined) return console.warn("Introduzca números al arreglo...");
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            console.error(`El tipo de dato en "${array[i]}" no es un número...`);
        }
    }
    
    let max = Math.max(...array),
        min = Math.min(...array)
    
    console.log(`Arreglo: ${array} \nEl número más alto es: ${max}\nEl número más bajo es: ${min}`);

}

const excercise22_1 = (arr = undefined) => {
    if (arr === undefined) return console.warn("Ingresa un arreglo...");
    if (!(arr instanceof Array)) return console.error("No es un arreglo...");
    if (arr.length === 0) return console.warn("El arreglo está vacío...");
    for (let n of arr) {
        if (typeof n !== "number") console.error(`El tipo de dato ${n} no es un número...`);
    }

    return console.log(`Arreglo original: "${arr}"\nEl valor mayor es: ${Math.max(...arr)}\nEl valor menor es: ${Math.min(...arr)}`)
}

console.group("Ejercicio 22: ");
excercise22([1, 4, 5, 99, -60]);
excercise22_1([1, 4, 5, 99, -60]);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #23
*   Programa una función que dado un array de números devuelva un objeto con 2 
*   arreglos en el primero almacena los números pares y en el segundo los impares, 
*   pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.  */

const excercise23 = (arr = undefined) => {
    if (arr === undefined) return console.warn("Ingresa un arreglo...");
    if (!(arr instanceof Array)) return console.error("No es un arreglo...");
    if (arr.length === 0) return console.warn("El arreglo está vacío...");
    for (let n of arr) {
        if (typeof n !== "number") console.error(`El tipo de dato ${n} no es un número...`);
    }

    console.log({
        Original: arr,
        pares: arr.filter(n => n % 2 === 0),
        impares: arr.filter(n => n % 2 === 1)
    })

    // const pares = arr.map(e => e%2 ===0);
    // const impares = arr.map(e => e%2 ===1)
    
    // return console.log(`Arreglo original: "${arr}"\nNúmeros pares: "${pares}"\nNúmeros impares: "${impares}"`)
}

// const newArr = arr.map(e => e * e);
// return console.log(`El arreglo original es "${arr}",\nelevado al cuadrado es "${newArr}"`);

console.group("Ejercicio 23: ");
excercise23([1,2,3,4,5,6,7,8,9,0]);
console.groupEnd();
console.log("--------------------");