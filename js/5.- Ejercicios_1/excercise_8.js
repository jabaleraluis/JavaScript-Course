/* 
> Excercise #24
*   Programa una función que dado un arreglo de números devuelva un objeto
*   con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente
*   y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá 
*   { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
> Excercise #25
*   Programa una función que dado un arreglo de elementos, elimine los duplicados, 
*   pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
> Excercise #26
*   Programa una función que dado un arreglo de números obtenga el promedio, pe. 
*   promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

/*
> Excercise #24
*   Programa una función que dado un arreglo de números devuelva un objeto
*   con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente
*   y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá 
*   { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const excercise24 = (arr = undefined) => {
    if (arr === undefined) return console.warn("Ingresa un arreglo...");
    if (!(arr instanceof Array)) return console.error("No es un arreglo...");
    if (arr.length === 0) return console.warn("El arreglo está vacío...");
    for (let n of arr) {
        if (typeof n !== "number") console.error(`El tipo de dato ${n} no es un número...`);
    }

    const asc = [...arr].sort((a, b) => b - a);
    const des = [...arr].toSorted((a, b) => a - b);

    console.log(`Areglo original: ${arr}\nAscendente: ${asc}\nDescendente: ${des}`);

    console.log({
        Original: arr,
        Ascendente: [...arr].toSorted((a, b) => a - b),
        Descendente: [...arr].sort((a, b) => b - a)
    })

    console.log({
        arr,
        asc: arr.map(e => e).sort(),
        des: arr.map(e => e).sort().reverse()
    })
}

console.group("Ejercicio 24: ");
excercise24([7, 5, 7, 8, 6]);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #25
*   Programa una función que dado un arreglo de elementos, elimine los duplicados, 
*   pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

const excercise25 = (arr = undefined) => {
    if (arr === undefined) return console.warn("Ingresa un arreglo...");
    if (!(arr instanceof Array)) return console.error("No es un arreglo...");
    if (arr.length === 0) return console.warn("El arreglo está vacío...");

    let unique = Array.from(new Set(arr))

    console.log({
        original: arr,
        dupli: [...new Set(arr)]
    })

    console.log({
        Arreglo: arr,
        unicos: unique 
    })
}

console.group("Ejercicio 25: ");
excercise25(["x", 10, "x", 2, "10", 10, true, true]);
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #26
*   Programa una función que dado un arreglo de números obtenga el promedio, pe. 
*   promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const excercise26 = (arr = undefined) => {
    if (arr === undefined) return console.warn("Ingresa un arreglo...");
    if (!(arr instanceof Array)) return console.error("No es un arreglo...");
    if (arr.length === 0) return console.warn("El arreglo está vacío...");
    for (let n of arr) {
        if (typeof n !== "number") console.error(`El tipo de dato "${n}" no es un número...`);
    }

    let total = 0;

    arr.forEach(e => total += e);
    const sum = arr.reduce((a, v) => a + v, total);

    console.log(sum)

    console.log(`Arreglo: "${arr.join(" + ")}"\nEl total es: "${total}"\nEl promedio es "${total / arr.length}"`);
    console.log({
        arr,
        total,
        promedio: total/arr.length
    });

    // console.log(
    //     arr.reduce((total, n, i, arr) => {
    //         total += n;
    //         if (i === arr.length - 1) {
    //             return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
    //         } else {
    //             return total;
    //         }
    //     })
    // )
}

console.group("Ejercicio 26: ");
excercise26([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
console.groupEnd();
console.log("--------------------");