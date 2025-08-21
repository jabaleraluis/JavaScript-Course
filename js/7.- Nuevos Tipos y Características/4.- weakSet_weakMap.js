// |---------------- Nuevos Tipos y Características ----------------|
// |-------------------- WeakSets & WeakMaps -----------------------|
console.log("------- WeakSets & WeakMaps -------");

/* 
> WeakSets & WeakMaps
#   ¿Qué son los WeakSets y los WeakMaps?
*       Significa que solo pueden almacenar referencias débiles, es decir 
*       que las llaves(keys) deben de ser de tipo objeto, al ser débiles
*       permite que el recolector de basura del navegador la limpia.
*       Tienen algunas carencias, no se pueden iterar, ni borrar todos los
*       elementos al mismo tiempo(clear), solo se puede eliminar de uno en uno,
*       no tienen la propiedad 'size'  */

console.log("---------- WeakSet ----------");
//const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOLA"]);   -> No se pueden agregar, solo de uno por uno con el '.add'
const ws = new WeakSet();

let valor1 = {"Valor 1": 1};
let valor2 = {"Valor 2": 2};
let valor3 = {"Valor 3": 3};

ws.add(valor1);
ws.add(valor2);

console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

// setInterval(() => console.log(ws), 1000);

// setTimeout(() => {
//     valor1 = null;
//     valor2 = null;
//     valor3 = null;
// }, 5000);

console.log("---------- WeakMap ----------");

const wm = new WeakMap();
let key1 = {};
let key2 = {};
let key3 = {};

wm.set(key1, 1);
wm.set(key2, 2);
console.log(wm);

console.log(wm.has(key1));
console.log(wm.has(key3));

console.log(wm.get(key1));
console.log(wm.get(key2));
console.log(wm.get(key3));

wm.delete(key2);
console.log(wm);

wm.set(key2, 2);
wm.set(key3, 3);
console.log(wm);

// setInterval(() => console.log(wm), 1000);

// setTimeout(() => {
//     key1 = null;
//     key2 = null;
//     key3 = null;
// }, 5000);