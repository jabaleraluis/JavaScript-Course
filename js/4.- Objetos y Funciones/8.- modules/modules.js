// |--------- Objetos y Funciones del Lenguaje -----------------|
// |------------- Modules (Import / Export) --------------------|
// console.log("------- Modules (Import / Export) -------");

/* 
> Módulos (Importar/Exportar )
#   ¿Qué son los módulos?
*       Es una función en la cuál tu englobas todo
*       el código que quieres ejecutar.
*       Se puede mandar a llamar archivos JavaScript
*       desde el HTML, pero también desde un archivo
*       javaScript interno llamar a otro. */

import saludar, {Saludar, PI, user} from "./const.js";
import {artimetica as ar} from "./aritmetic.js";            // -> Se le puede crear un álias y mandarlo a llamar como normalmente se llama

console.log(PI, user);
//console.log(artimetica.sumar(1,5));
console.log(ar.sumar(1,5));

saludar();
let saludo = new Saludar();
saludo;