// |---------- DOM: Document Object Model ----------|
// |-------- DOM Traversing -----------|
console.log("----- DOM Traversing -----");

/* 
> Recorriendo el DOM
*   Utiliza las propiedades que nos sirven para recorrer
*   los elementos.    */

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);                   // -> Hace referencia a los hijos dentro de '.cards'
console.log($cards.childNodes);                 // -> Hace referencia a los nodos hijos
console.log($cards.children[2]);                // -> Para acceder a uno en particular, como los arreglos '[]'
console.log($cards.parentElement);              // -> Retorna el elemento padre
console.log($cards.parentNode);
console.log($cards.firstChild);                 // -> Hace referencia al primer nodo (detecta la indentación)
console.log($cards.firstElementChild);          // -> Detecta el primer elemento
console.log($cards.lastElementChild);           // -> Último elemento

console.log($cards.previousElementSibling);     // -> Hace referencia al contenido anterior
console.log($cards.nextElementSibling);

console.log($cards.children[3].closest("section"));     // -> Va a buscar el padre más cercano que nosotros referenciamos