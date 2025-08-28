// |---------- BOM: Browser Object Model ----------|
// |------------- Event & Properties --------------|
console.log("----- Event & Properties -----");

//> BOM: Eventos y Propiedades

window.addEventListener("resize", (e) => {
    console.clear()
    console.log("---------- Evento Resize ----------");
    console.log("Inner Width: ",window.innerWidth);             // -> Es lo que se muestra en pantalla, lo que se está viendo
    console.log("Inner Height: ",window.innerHeight);
    console.log("Outer Width: ",window.outerWidth);             // -> Es el tamaño normal de la pantalla
    console.log("Outer Height: ",window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("---------- Evento Scroll ----------");
    console.log("Scroll X: ", window.scrollX);
    console.log("Scroll Y: ",window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => {                            // -> Está lista cuando carga TODO el HTML. y se espera a que cargue el CSS, img, etc.
    console.log("---------- Evento Load ----------");
    console.log("Screen X: ", window.screenX);
    console.log("Screen Y: ",window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {              // -> No espera a que carguen las hojas de estilo, img, scripts, etc. para que empiece a funcionar.
    console.log("---------- Evento DOMContentLoaded ----------");
    console.log("Screen X: ", window.screenX);
    console.log("Screen Y: ",window.screenY);
    console.log(e);
});