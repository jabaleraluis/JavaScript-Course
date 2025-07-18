// |--------- Objetos y Funciones del Lenguaje -----------------|
// |-------------- Regular Expressions ----------------------|
console.log("------- Regular Expressions ------- ");

/* 
> Expresiones Regulares
#   ¿Qué son las Expresiones Regulares?
*       Son una secuencia de caracteres que forman 
*       un patró n de búsqueda, se utilizan principalmente      -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
*       en cadenas de texto. */  

let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repudiandae quaerat voluptates odio labore laborum accusantium accusamus dolorem, totam, officia nemo in possimus et sapiente magni iusto amet consequatur eligendi?"

let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/ig;

console.log(expReg.test(texto));           // -> test : prueba que la expresión regular esté dentro del texto
console.log(expReg.exec(texto));           // -> exec : te devuelve un arreglo diciéndote dónde lo encontró
console.log("------------------------------")
console.log(expReg2.test(texto));
console.log(expReg2.exec(texto));