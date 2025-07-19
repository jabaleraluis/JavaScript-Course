// |--------- Objetos y Funciones del Lenguaje -----------------|
// |--------- Immediately invoke function executable ----------------|
console.log("------- Immediately Invoke Function Executable -------");

/* 
> Funciones Anónimas Autoejecutables
#   ¿Qué son las Funciones Anónimas Autoejecutables?
*       Es una función en la cuál tu englobas todo
*       el código que quieres ejecutar. */

//> Función Anónima Autoejecutable
(function () {
    console.log("My first IIFE :D")
}) ();

(function (d, w, c) {
    console.log("My second IIFE :D");
    console.log(d);
    console.log(w);
    c.log("console.log()");
}) (document, window, console);

//> Formas diferentes de hacer una IIFE
//# Clásica
(function (){
    console.log("Versión Clásica");
})();

//# Crockford (JavaScript The Good Parts: libro)               -> Douglas Croackford, creador de JSON
((function (){
    console.log("Versión Crockford");
})());

//# Unaria
+function () {
    console.log("Versión Unaria");
}();

//# Facebook
!function() {
    console.log("Versión Facebook");
}();