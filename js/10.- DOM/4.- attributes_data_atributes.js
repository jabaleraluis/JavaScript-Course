// |---------- DOM: Document Object Model ----------|
// |-------- Attributes & Data-Attributes -----------|
console.log("----- Attributes & Data-Attributes -----");

/* 
> Atributos y Data-Attributes
#   Atributos:
*       Cada etiqueta de HTML tiene sus atributos, como el href, id,
*       placeholder, etc.
#   Data-Attributes:
*       Nos permite crear nuestros propios atributos.
*       El estándar HTML, es que empiecen con la palabra 'data-'
*       seguido del nombre que quieras agregarle.
*       ej. data-description=""    */

/* 
* Hay dos manera de interactuar o mandar atributos y también
* establecer los valores    */

//* 1
console.log(document.documentElement.lang);                     // -> Se accede a los atributos, se respeta el nombre como tal

//* 2
console.log(document.documentElement.getAttribute("lang"));     // -> Es más específico.

console.log(document.querySelector(".link-dom").href);                      // -> Obtiene toda la url
console.log(document.querySelector(".link-dom").getAttribute("href"));      // -> Obtiene solo el atributo href

//* Cómo establecer un nuevo valor a los atributos
document.documentElement.lang = "en";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.getAttribute("lang"));

//* Guardar elementos del DOM en variables
const $linkDOM = document.querySelector(".link-dom");           // -> Variables del DOM, se indentifican con el signo '$', buenas prácticas

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noreferrer");
$linkDOM.setAttribute("href", "https://developer.mozilla.org/");

console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//* Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "MDN for developers"

console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));