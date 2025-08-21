// |-------------------- Programación Asíncrona --------------------|
// |------------------------ Async/Await ---------------------------|
console.log("------- Async / Await ------- ");

/* 
> Async / Await
#   ¿Qué son el Async y Await?
*       Van a esperar que la condición se cumplan, para seguir
*       ejecutando el proceso.  */

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
}

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio de Async Function");

    let obj = await cuadradoPromise(0);                             // -> 'await' sirve para esperar la respuestá del setTimeOut, o lo que genere tiempo
    console.log(`Async Function Dec: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function Dec: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function Dec: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function Dec: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("4");
    console.log(`Async Function Dec: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function Dec: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function Dec.");
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();


const funcionAsincronaExpresada = async() => {
  try {
    console.log("Inicio de Async Function");

    let obj = await cuadradoPromise(6);
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("9");
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(10);
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function Exp.");
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaExpresada();