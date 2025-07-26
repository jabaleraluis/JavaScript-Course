/* 
> Excercise #15
*   Programa una función para convertir números de base binaria 
*   a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
> Excercise #16
*   Programa una función que devuelva el monto final después de aplicar
*   un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
> Excercise #17
*   Programa una función que dada una fecha válida determine cuantos 
*   años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
*   devolverá 35 años (en 2020). */

/* 
> Excercise #15
*   Programa una función para convertir números de base binaria 
*   a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

const excercise15 = (n = undefined, b = undefined) => {
    if (n === undefined) return console.warn("Ingresa número a convertir...")
    if (b === undefined) return console.warn("Ingresa la base a convertir...")
    if (typeof n !== "number" || typeof b !== "number") return console.error("No es un número...")
    
    if (b === 2) {
        return console.log(`${n} base ${b} = ${parseInt(n, b)} base 10(Decimal)`);
    } else if (b === 10){
        return console.log(`${n} base ${b} = ${(n.toString(2))} base 2(Binario)`)
    } else {
        console.error("Solo se puede convertir decimal (base 10) y binario (base 2)")
    }
}

console.group("Ejercicio 15: ");
excercise15(10100100, 2);
excercise15(100, 10);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #16
*   Programa una función que devuelva el monto final después de aplicar
*   un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

const excercise16 = (n = undefined, d = undefined) => {
    if (n === undefined) return console.warn("Ingresa número a aplicar el descuento...")
    if (d === undefined) return console.warn("Ingresa el descuento...")
    if (n === 0) return console.warn("El monto no puede ser 0...")
    if (typeof n !== "number" || typeof d !== "number") return console.error("No es un número...")
    if (Math.sign(n) === -1) return console.error("Debe de ser un número positivo...")

    return console.log(`El ${d}% de ${n} es ${n - (n*(d/100))}`)
}

console.group("Ejercicio 16: ");
excercise16(1000, 20);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #17
*   Programa una función que dada una fecha válida determine cuantos 
*   años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
*   devolverá 35 años (en 2020). */

const excercise17 = (d = undefined) => {
    if (d === undefined || d === "") return console.warn("Ingrese una fecha...")
    if (!(d instanceof Date)) return console.warn("La fecha no es válida...")
    
    let t = new Date().getTime() - d.getTime();
    let ms = 1000 * 60 * 60 * 24 * 365
    let y = Math.floor(t/ms);

    return (Math.sign(y) === -1)
    ? console.log(`Faltan ${Math.abs(y)} años para el ${d.getFullYear()}`)
    : (Math.sign(y) === 1)
        ? console.log(`Han pasado ${y} años desde ${d.toLocaleDateString()}`)
        : console.log(`${d.getFullYear()} es el año actual`)
}

console.group("Ejercicio 17: ");
// excercise17(new Date(2025, 1, 6));
excercise17(new Date(2030, 3, 6));
console.groupEnd();
console.log("--------------------");