// |---------------- Nuevos Tipos y Características ----------------|
// |------------------------ Maps ---------------------------|
console.log("------- Maps -------");

/* 
> Maps
#   ¿Qué es un Map?
*       Son objetos que nos sirven para almacenar conjunto de valores
*       asociados a manera de objeto, como si fuera un objeto primitivo.  */

let nombre = "Luis";

const mapa = new Map();

mapa.set("Nombre", nombre);                             // -> Sirve para agregar valores
mapa.set("Apellido", "Jabalera");
mapa.set("Edad", 25);

console.log(mapa);
console.log(mapa.size);                                 // -> Como el 'lenght'
console.log(mapa.has("correo"));
console.log(mapa.has("Nombre"));
console.log(mapa.get("Nombre"));
mapa.set("Nombre", "Angel");
console.log(mapa.get("Nombre"));
mapa.delete("Apellido");

mapa.set(19, "diecinueve");
mapa.set(false, "false");
mapa.set({}, {})

console.log(mapa);

console.log("------------ for of ------------");
for (let[key, value] of mapa) {
    console.log(`${key} = ${value}`);
}
console.log("--------------------------------");

//* Iniciarlizar un map
const mapa2 = new Map([
    ["Nombre", "Ricky"],
    ["Edad", 1],
    ["Animal", "perro"],
    [null, "nulo"]
]);

console.log(mapa2);

const keysMapa2 = [...mapa2.keys()];
const valuesMapa2 = [...mapa2.values()];

console.log(keysMapa2);
console.log(valuesMapa2);

/* console.log("--------------------");
for (const key of mapa.keys()) {
  console.log(key);
}

console.log("----------VALUES----------");
for (const value of mapa.values()) {
  console.log(value);
}

console.log("----------ENTRIES for of----------");
for (const [key, value] of mapa.entries()) {
  console.log(`${key} = ${value}`);
}

console.log("-----------KEY forEach---------");
mapa.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

console.log("----------Array of----------");
const arr = Array.from(mapa);
console.log(Array.from(mapa));
console.log([...arr]);

console.log(Array.from(mapa.values()));

console.log("----------CLONE----------");
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1));
console.log(original === clone);

console.log("--------------------");
mapa.clear();
console.log(mapa) */