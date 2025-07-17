// |----------------------Tipos de datos------------------------------|
// |--------------------- Arrays/Arreglos ----------------------------|
console.log("------- Arrays/Arreglos ------- ");

const arrA = []
const arrB = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];

console.log(arrB);
console.log(arrB[3]);          // -> Se puede acceder a la posición del arreglo
console.log(arrB[3][0]);       // -> Se puede acceder a la posición del arreglo dentro de otro arreglo
console.log(arrB[3][3][0]);    // -> ...

// Diferente manera de crear arreglos
const arrC = Array.of("Z", "Y", "X", 9, 8, 7);
console.log(arrC)

// Diferente manera que te permite asignarle un campo a todas sus posiciones el mismo valor
const arrD = Array(10).fill(1); // -> Asigna la longitud dentro de Array("n") y el valor dentro de .fill("v")
console.log(arrD)

//Arrays forma en desuso
const e = new Array();
console.log(e);
const f = new Array(1,2,3, true, false);
console.log(f);

console.log("----------------------- ");

//Métodos de los arreglos
const colores = ["Amarillo", "Verde", "Morado"];

console.log(colores)
colores.push("Negro");
console.log(colores)
colores.pop();              // -> .pop quita el último elemento de la lista
console.log(colores);
colores.unshift("Azul");
console.log(colores)        // -> unshift agrega un elemento al inicio de la lista
colores.shift();            // -> shift quita el primer elemento de la lista
console.log(colores);

console.log("----------------------- ");

//Recorre los colores en una lista
colores.forEach(function (e, i){                    // "e" es una variable, como el for "i,j,k"     e = element
    console.log(`<li id="${i}">${e}</li>`)          //                                              i = index
});

console.log("----------------------- ");

//Arrow fuction
colores.forEach(e => console.log(`<i>${e}</i>`))                    // -> Lo mismo pero con función de flecha o arrow fuction
colores.forEach((e, i) => console.log(`<i id="${i}">${e}</i>`));    // -> Si usas más de un parámtro van en "()" paréntesis