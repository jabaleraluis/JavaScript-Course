// |-------------------- Programación Asíncrona --------------------|
// |------------------- setTimeOut & setInterval -------------------|
console.log("------- Temporizadores ------- ");

/* 
> Temporizadores - setTimeOut & setInterval
#   ¿Qué es el setTimeOut y el setInterval?
¡       • setTimeOut:
*           Recibe una función (callback) que va a ejecutar
*           y recibe un tiempo expresdado en ms, se ejecuta
*           solo una vez.
¡       • setInterval:
*           Se ejecuta indefinidamente cada cierto intervalo
*           de tiempo.  */

//> setTimeOut

console.log(`Hola`);
setTimeout(() => {
    console.log(`Hola setTimeOut`)
}, 2000);                               // -> Tiempo en ms en lo que se ejecutará solo 1 vez.
console.log(`Hola de nuevo`);


//> setInterval

/* setInterval(() => {
    console.log(`Hola setInterval`);
}, 2000); */                            // -> Tiempo en ms que se estará ejecutando.

/* let time = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(time);
console.log("Después del clearTimeOut") */

let time = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(time);
console.log("Después del clearInterval")