// |---------- DOM: Document Object Model ----------|
// |-------------------- DOM -----------------------|
console.log("---------- WEB APIs ----------");

/* 
> WEB APIs
#   ¿Qué son las WEB APIs?
*       es una interfaz que permite que diferentes aplicaciones
*       se comuniquen entre sí a través de la web.   */

console.log(window);
console.log(document);

let texto = "Hola, este es un texto de prueba"

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);