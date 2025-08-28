// |---------- DOM: Document Object Model ----------|
// |------ stopPropagation & preventDefault --------|
console.log("----- stopPropagation & preventDefault -----");

/*
> stopPropagation & preventDefault
#   - preventDefault:
*       Hay ciertos elementos del DOM que tienen
*       comportamiento o eventos ya por defecto. ej.
*       las teclas de arriba y abajo y el scroll del mouse. */

const $divEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation();                // -> Evita la propagación
}

$divEventos.forEach(div => {
    div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", e => {
    alert("Hola desde MDN");
    e.preventDefault();
    e.stopPropagation();
});