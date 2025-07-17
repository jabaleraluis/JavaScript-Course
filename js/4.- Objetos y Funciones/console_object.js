// |--------- Objetos y Funciones del Lenguaje -----------------|
// |------------------- Console Object -------------------------|
console.log("------- Console Object ------- ");

/* 
> Objecto Console
#   ¿Qué es el Objeto Console?
*       
*/


console.log(console);
console.error("Esto es un Error");
console.warn("Esto es un Aviso")
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que pasa en la aplicacón");

console.log("-----------------------------")

let nombre = "Luis",
apellido = "Jabalera",
edad = 25;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);        // -> Comodines se ponen, después del mensaje
//                               ↑            ↑
//                        Cadena de texto | Dígito

console.clear();                        // -> Limpia la consola
console.log(window);                    // -> Objeto global de JS
console.log(document);                  // -> Es la representación del documento HTML a través de JS
console.dir(window);                    // -> "dir" muestra la representación de un objeto para analizar
console.dir(document);

console.clear();

console.group("Cursos de @Jonmircha en Youtube");               // -> Grupo colapsado
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();

console.groupCollapsed("Cursos de @Jonmircha en Youtube");      // -> Grupo que colapsa
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();

console.clear();

console.log(console);
console.table(Object.entries(console).sort());                 // -> "table" : Muestra una tabla, "sort" : muestra de manera ascendente de la a-z

//Objetos en forma de tabla
const numeros = [1, 2, 3, 4, 5],
vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Chapo",
    raza: "Pug",
    color: "Pan de Hotdog"
}

console.table(perro);

console.clear();

console.time("codeTime");                   // -> Para saber el tiempo de ejecución, debe tener la misma etiqueta(ID)
const arr = Array(1000000);

for (let i = 0; i < arr.length; i++){
    arr[i] = i;
}

console.timeEnd("codeTime");                // -> Finaliza con la misma etiqueta
//console.log(arr)

console.clear();

for (let i = 0; i <= 10; i++) {
    console.count("Código for")             // -> Cuenta cuántas veces se ejecuta
    console.log(i);
}

console.clear();

let x = 3,
y = 2,
pruebaXY = "Se espera que X sea menor que Y";   // -> Mensaje a mostrar

console.assert(x < y, {x,y,pruebaXY});          // -> Sirve para hacer pruebas
//               ↑          ↑
//          Condición | Variables + Mensaje
