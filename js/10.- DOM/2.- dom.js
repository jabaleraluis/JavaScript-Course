// |---------- DOM: Document Object Model ----------|
// |-------------------- DOM -----------------------|
console.log("---------- DOM ----------");

/* 
> DOM
#   ¿Qué son las DOM?
*       Permite interactuar el código html con js   */

console.log("---------- Elementos del documento ----------");
console.log(window.document);                   // -> 'document' cuelga de window, pero no es necesario poner window
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

document.writeln("<h2> Hola mundo desde el DOM </2>");