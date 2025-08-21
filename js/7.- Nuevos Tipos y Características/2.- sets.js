// |---------------- Nuevos Tipos y Características ----------------|
// |------------------------ Sets ---------------------------|
console.log("------- Sets -------");

/* 
> Sets
#   ¿Qué son los Sets?
*       Es una estructura similar a un Array, pero de datos únicos  */

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOLA"]);        // -> Aquí sí se utiliza el 'new'

console.log(set);
console.log(set.size);                              // -> En vez de 'lenght' es 'size'

const set2 = new Set();

set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);
console.log("--------------------");

console.log("for del primer set: ");
for (item of set) {
    console.log(item);
}

console.log("forEach del segundo set: ");
set2.forEach(item => console.log(item));

let arr = Array.from(set);                          // -> Para iterar sobre un objeto y mostrar el dato que quieres se tiene que convertir en Array primero

console.log(arr);
console.log(arr[2]);                                // -> Una vez convertido a arreglo ya podemos seleccionarlo por posiciones.

set.delete("HOLA");                                 // -> Sirve para eliminar valores dentro del set
console.log(set);

console.log(set.has("hola"));                       // -> Devuelve si el set tiene esa propiedad, valida si está dentro de la colección o no

set2.clear();                                       // -> Limpiar el set
console.log(set2);