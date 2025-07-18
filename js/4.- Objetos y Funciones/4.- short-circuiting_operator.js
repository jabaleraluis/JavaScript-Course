// |--------- Objetos y Funciones del Lenguaje -----------------|
// |------------- Short-Circuiting Operator --------------------|
console.log("------- Short-Circuiting Operator ------- ");


//> Operador Cortocircuito
//#   ¿Qué es el Operador Cortocircuito?

/* 
¡   • Cortocircuito OR
*       Cuando el valor de la izquierda en
*       la expresión siempre puede validar a true,
*       es el valor que se cargará por defecto. */

/* function saludar(nombre = "Desconocido") {
    console.log(`Hola ${nombre}`);
} */

function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
 
saludar("Luis");
saludar();

console.log("Cadena" || "Derecha");
console.log(19 || "Derecha");
console.log([] || "Derecha");
console.log({} || "Derecha");
console.log(false || "Derecha");
console.log(null || "Derecha");
console.log(undefined || "Derecha");
console.log("" || "Derecha");
console.log(0 || "Derecha");


console.log("-------------------------");
/*
¡   • Cortocircuito AND
*       Cuando el valor de la izquierda en la
*       expresión siempre puede validar a false,
*       es el valor que se cargará por defecto. */

console.log("Cadena" && "Derecha");
console.log(19 && "Derecha");
console.log([] && "Derecha");
console.log({} && "Derecha");
console.log(false && "Derecha");
console.log(null && "Derecha");
console.log(undefined && "Derecha");
console.log("" && "Derecha");
console.log(0 && "Derecha");