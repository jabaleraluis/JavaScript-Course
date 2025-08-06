// |-------------------- Programación Asíncrona --------------------|
// |------------------- Asynchrony & Event Loop --------------------|
console.log("------- Asincronía y Event Loop ------- ");

/* 
> Asincronía y Event Loop
#   ¿Qué es la Asincronía y Event Loop?
¡       • Asincronía:
*           Es uno de los pilares fundamentales de JS, ya que es
*           un lenguaje de un subproceso o hilo(single thread), lo
*           que significa que solo puede ejecutar una cosa a la vez.
*           LIFO (Last In / First Out)
¡       • Procesamiento Single Thread y Multi Thread:
*           Los "hilos (threads)" son las unidades básicas de ejecución
*           de cada proceso que realiza nuestra máquina: ej. cada que
*           abres una app se levanta un proceso, pueden correr varios o
*           un solo hilo que es lo que ejecuta su funcionalidad.
¡       • Operaciones de CPU y Operaciones I / O:
¡           - Operaciones CPU:
*               Son aquellas que pasan el mayor tiempo consumiento procesos
*               del CPU, ej. la escritura de ficheros.
¡           - Operaciones de Entrada y Salida:
*               Son aquellas que pasan la mayor parte del tiempo esperando
*               la respuesta de una petición o recurso, como la solicitud
*               a una API o BD.
¡       • Operaciones Concurrentes y Paralelas:
¡           - Concurrentes:
*               Es cuando dos o más tareas progresan simultáneamente, es
*               decir, se ejecutan al mismo tiempo, avanza una conforme
*               a otra.
¡           - Paralelísmo:
*               Es cuando dos o más tareas se ejecutan al mismo tiempo.
¡       • Operaciones Bloqueantes y No Bloqueantes:
*           Se refiere a la fase de espera cada que se va ejecutando una
*           operación de nuestro código.
¡           - Bloqueante:
*               Es aquella que no va a devolver el control a la aplicación
*               hasta que haya terminado toda su tarea.
¡           - No bloqueante:
*               Las operaciones se ejecutan y devuelven inmediatamente el
*               control al hilo principal, no importa si no ha acabado su
*               tarea, manda una notificación al final.
¡       • Operaciones Síncronas y Asíncronas:
*           Se refiere a cuándo tendrá lugar la respuesta.
¡           - Síncrono:
*               La respuesta sucede en el tiempo presente/inmediato, espera
*               el resultado en tiempo presente y sigue otra operación.
¡           - Asíncrono:
*               La respuesta sucede en un futuro, se ejecuta pero no sabe 
*               cuando va a devolver la respuesta, no espera el resultado,
*               por eso devuelve el control al hilo principal. */



//# JavaScript es un modelo asíncrono y no bloqueante, con un loop de eventos
//# implementado en un sólo hilo (single thread) para operaciones de entrada
//# y salida (input/output)   

//* Página para ver cómo funciona el proceso -> http://latentflip.com/loupe/

/* 
> En JavaScript
# Código Síncrono Bloqueante:
*   Cada operación se hace se hace de una vez bloqueando el flujo del hilo
*   principal, este hilo queda bloqueado mientras espera la respuesta, cuando
*   se procese, pasa a la siguiente operación.  */

(() => {
    console.log("Código Síncrono");
    console.log("Inicio");

    function dos() {
        console.log("Dos");
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();

// # Código Asíncrono No Bloqueante

(() => {
    console.log("Código Asíncrono");
    console.log("Inicio");

    function dos() {
        setTimeout(function () {
            console.log("Dos");
        }, 1000);
    }

    function uno() { 
        setTimeout(function() {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");

})();