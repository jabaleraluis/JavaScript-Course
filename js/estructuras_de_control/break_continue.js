// |----------------- Manejo de errores -------------------------|
// |----------------- Break / Continue --------------------------|
console.log("------- Break / Continue ------- ");

/* 
> Break - Continue
#   ¿Qué es el BREAK y el CONTINUE?
*       
*       
*       
*        */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;                                      // -> Rompe la estructura padre donde se define y se sale del ciclo.
    }
    console.log(numeros[i]);
}

console.log("-------------------------------- ");

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;                                   // -> cuando se cumple la condición omite el valor y continua con el ciclo
    }
    console.log(numeros[i]);
}

console.log("-------------------------------- ");
// Números impar

for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 1) {
        console.log(`impar: ${i}`);
        continue;
    }
    // console.log(numeros[i]);
}