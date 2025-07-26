/* 
> Excercise #12
*   Programa una función que determine si un número es primo (aquel que 
*   solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
> Excercise #13
*   Programa una función que determine si un número es par o impar, 
*   pe. miFuncion(29) devolverá Impar.
> Excercise #14
*   Programa una función para convertir grados Celsius a Fahrenheit 
*   y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

/* 
> Excercise #12
*   Programa una función que determine si un número es primo (aquel que 
*   solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const excercise12 = (n = undefined) => {
    if (n === undefined) return console.warn("No ingresaste un número...");
    if (n === 0) return console.warn("El número no puede ser 0...")
    if (n === 1) return console.warn("El número no puede ser 1...")
    if (n === 2) return console.log(`El número ${n} es el único par que es primo a la vez`)
    if (Math.sign(n) === -1) return console.error("El número debe de ser positivo...");    
    if (typeof n !== "number") return console.warn("Debe ser tipo número...");
    
    let div = false;

    for (let i = 2; i < n; i++){
        if (n % i === 0){
            div = true;
            break;
        }
    }

    return (div)
    ? console.log(`El número ${n} NO es primo`)
    : console.log(`El número ${n} SÍ es primo`)
}

console.group("Ejercicio 12: ");
excercise12(101);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #13
*   Programa una función que determine si un número es par o impar, 
*   pe. miFuncion(29) devolverá Impar. */

const excercise13 = (n = undefined) => {
    if (n === undefined) return console.warn("No ingresaste un número...");
    if (n === 0) return console.warn("El número no puede ser 0...")
    if (typeof n !== "number") return console.warn("Debe ser tipo número...");

    return (n % 2 === 0 )
    ? console.log(`El número ${n} es par`)
    : console.log(`El número ${n} es impar`)
}

console.group("Ejercicio 13: ");
excercise13(8);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #14
*   Programa una función para convertir grados Celsius a Fahrenheit 
*   y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const excercise14 = (n = undefined, g = "") => {
    g = g.toLocaleUpperCase();

    if (n === undefined) return console.warn("Ingresa un número a convertir...");
    if (typeof n !== "number") return console.warn("Solo se puede de tipo numérico...")
    if (g === "") return console.warn("Ingrese tipo de grado")
    if (g !== "C" && g !== "F") return console.warn("Solo se puede grados Fahrenheit (F) y Celcius (C)")

    return (g === "F")
    ? console.log(`${n}°F son ${Math.round((n - 32) * 5/9)}°C`)
    : console.log(`${n}°C son ${Math.round((n * 9/5) + 32)}°F`)    
}

console.group("Ejercicio 14: ");
excercise14(0, "c");
console.groupEnd();
console.log("--------------------");