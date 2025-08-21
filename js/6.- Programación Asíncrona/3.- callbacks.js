// |-------------------- Programación Asíncrona --------------------|
// |------------------- Callbacks -------------------|
console.log("------- Callbacks ------- ");

/* 
> Callbacks
#   ¿Qué son los Callbacks?
*       Es una función que se va a ejecutar después de que otra
*       lo haga, es el mecanísmo por excelencia que tiene js para
*       invocar alguna de sus funciones.     */

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

function miFuncion(n, c) {
  if(typeof n !== "number") {
    console.error("No es un número")
  }
  if (n % 2 === 0) {
    c(true)
  } else {
    c(false)
  }
}

miFuncion("24", (par) => {
  if (par) {
    console.log("Es par")
  }
  else {
    console.log("Es impar")
  }
})

//! CALLBACK HELL
cuadradoCallback(0, (value, result) => {
  console.log("Inicia callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin callback Hell!");
          });
        });
      });
    });
  });
});
