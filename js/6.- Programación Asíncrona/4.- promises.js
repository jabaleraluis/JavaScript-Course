// |-------------------- Programación Asíncrona --------------------|
// |-------------------------- Promises ----------------------------|
console.log("------- Promises ------- ");

/* 
> Promesas
#   ¿Qué son las promesas?
*       Trabajan con dos recursos principales (se puede ver como 'if - else'):
#       Result:
*           Si se realiza el proceso o la API da respuesta, se ejecuta.
#       Reject:
*           Si falla, se ejecuta    */

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(`El valor '${value}' no es un número...`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
};

cuadradoPromise(0)
.then(obj => {                        // -> 'then' es el siguiente bloque que se va ejecutar una vez que se cumpla la función inicial.
  console.log("Inicio Promise");
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(1);
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(2);
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(3);
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise("4");
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(5);
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  console.log("Fin Promise.");
})
.catch(err => console.error(err));                               // -> 'catch' es el que va a atrapar el error resultante del reject
