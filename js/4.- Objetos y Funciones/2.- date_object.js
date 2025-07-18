// |--------- Objetos y Funciones del Lenguaje -----------------|
// |------------------- Date Object -------------------------|
console.log("------- Console Date ------- ");

/* 
> Objecto Date
#   ¿Qué es el Objeto Date?
*       
*/

console.log(Date());

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());           // -> Obtiene el día del mes
console.log(fecha.getDay());            // -> Día de la semana : D L M M J V S D
//                                                               ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
//                                                               0 1 2 3 4 5 6 7

console.log(fecha.getMonth());          // -> Obtiene el mes    Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic
//                                                               ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑
//                                                               0   1   2   3   4   5   6   7   8   9   10  11

console.log(fecha.getYear());           // -> Obtiene el año desde 1900, 2025 - 1900 = 125
console.log(fecha.getFullYear());       // -> Obtiene el año actual

console.log(fecha.getHours());          // -> Formato 0Hrs - 23Hrs
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

console.log("--------------------");

console.log(fecha.toString());              // -> Convierte la fecha a cadena
console.log(fecha.toDateString());          // -> Solo la fecha : DN - DD - MM - YYYY
console.log(fecha.toLocaleString());        // -> Fecha corta : DD/MM/YYYY, hora
console.log(fecha.toLocaleDateString());    // -> Solo fecha : DD/MM/YYYY
console.log(fecha.toLocaleTimeString());    // -> Solo la hora : HH/MM/SS am/pm
console.log(fecha.getTimezoneOffset());     // -> Uso horario en el que nos encontramos

//No da la hora del meridiano de Greenwich (UTC±00:00)
console.log(fecha.getUTCDate());
console.log(fecha.getUTCDay());

console.log(Date.now());                    // -> Cuántos segundos han pasa del 1ro de enero de 1970 - Timestamp
//Sirve para decir algo como "Publicado hace 3 meses, 2 horas, x tiempo...",//* librería: moment.js

let myBirthday = new Date(2000, 1, 6);          // -> Se pueden pasar parámetros de diferentes manera como string o números - YYYY/MM/DD
console.log("Cumpleaños Luis Jabalera: " + myBirthday.toDateString("es-MX"));

