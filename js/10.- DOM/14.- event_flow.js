// |---------- DOM: Document Object Model ----------|
// |----------------- Event Flow -------------------|
console.log("----- Event Flow -----");

/*
> Flujo de Eventos
*   Una vez que un evento se origina tiene una propagación
*   a lo largo del DOM, se da el elemento más interno al 
*   elemento más externo, se llama fase de 'burbuja'.   */

const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);              // -> this hace referencia a la 'div' en cuestión
}

$divEventos.forEach(div => {
    // Fase de burbuja
    //div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);
    
    //Fase de captura, del más externo al interno
    //div.addEventListener("click", flujoEventos, true);

    div.addEventListener("click", flujoEventos, {
        capture: true,
        once: true                          // -> Si se habilita solo se ejecuta una vez
    });
});