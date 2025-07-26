/* 
> Excercise #9
*   Programa una función que obtenga un numero aleatorio entre 501 y 600.
> Excercise #10
*   Programa una función que reciba un número y evalúe si es capicúa o no 
*   (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
> Excercise #11
*   Programa una función que calcule el factorial de un número (El factorial de un entero 
*   positivo n, se define como el producto de todos los números enteros positivos desde 1 
*   hasta n), pe. miFuncion(5) devolverá 120. */

/* 
> Excercise #9
*   Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const excercise9 = () => console.log(`Número random entre 500 y 600: "${Math.round((Math.random()*(100)) + 500)}"`);

console.group("Ejercicio 9: ");
excercise9();
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #10
*   Programa una función que reciba un número y evalúe si es capicúa o no 
*   (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const excercise10 = (n = 0) => {
    if (!n) return console.warn("No ingresaste un número...")
    if (isNaN(n)) return console.error("Solo se permiten números...")
    if (typeof n !== "number") return console.error("No es un número...")

    let cap = n.toString().split("").reverse().join("");

    return (n === parseInt(cap))
        ? console.log(`El número "${n}" si es capicúa: ${cap}`)
        : console.log(`El número "${n}" no es capicúa... ${cap} `);
}

console.group("Ejercicio 10: ");
excercise10(2002);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #11
*   Programa una función que calcule el factorial de un número (El factorial de un entero 
*   positivo n, se define como el producto de todos los números enteros positivos desde 1 
*   hasta n), pe. miFuncion(5) devolverá 120. */

const excercise11 = (n = undefined) => {
    if (n === undefined) return console.warn("No ingresaste un número...")
    if (typeof n !== "number") return console.error("Debe ser un número...")
    if (Math.sign(n) === -1) return console.error("Debe de ser un número positivo...")
    if (n === 0) return console.warn("El número no puede ser 0")

    let fac = 1;

    for (let i = n; i > 0; i--){
        fac *= i
    }

    return console.log(`El factorial de ${n}! es: ${fac}`)
}

console.group("Ejercicio 11: ");
excercise11(5);
console.groupEnd();
console.log("--------------------");