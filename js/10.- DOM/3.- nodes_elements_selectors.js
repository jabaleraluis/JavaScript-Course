// |---------- DOM: Document Object Model ----------|
// |-------- Nodes, Elements & Selectors -----------|
console.log("----- Nodes, Elements & Selectors -----");

/* 
> Nodos
*   No hay que confundir etiqueta HTML con nodos.
*   Hay diferentes tipos de nodos, los comentarios, etiquetas otro tipo de nodo,
*   los parrafos, encabezados, también son nodos. 
#   Nodo de Texto:
*       Es lo que tiene dentro la etiqueta H1, p, span, etc.
#   Nodo de tipo elemento:
*       Es una etiqueta HTML en particular.     */


console.log(document.getElementsByTagName("li"));           // -> Trae todos los elementos por nombre de etiqueta
console.log(document.getElementsByClassName("card"));       // -> Por nombre de clase, no necesita el punto '.'
console.log(document.getElementsByName("nombre"));
//* getElementsByTagName, getElementsByClassName, getElementsByName, Han sido reemplazados por querySelector

console.log(document.getElementById("menu"));               // -> Selecciona a través del ID, no necesita '#', es más rápido/mejor rendimiendo por id
console.log(document.querySelector("#menu"));               // -> Recibe un id, clase, etiqueta que esté dentro de cierta clase, id. | Aquí si necesita el '.' o el '#' dependiendo qué sea.

console.log(document.querySelector("a"));                   // -> Selecciona solo 1
console.log(document.querySelectorAll("a"));

console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(el => console.log(el));

console.log(document.querySelectorAll(".card")[2]);         // -> Se pueden seleccionar como los arreglos, accediendo con '[]'
console.log(document.querySelectorAll("#menu li"));         // -> Se pueden referenciar como css