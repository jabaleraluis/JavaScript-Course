// |---------- DOM: Document Object Model ----------|
// |------- Creating Elements & Fragments ----------|
console.log("----- Creating Elements & Fragments -----");

/* 
> Creando Elementos y Fragmentos
*   
*       */

r1 = Math.round(Math.random() * 200);
r2 = Math.round(Math.random() * 100);

const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Random"),           // -> Crea un nodo de texto
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

$figcaption.appendChild($figcaptionText);
$img.setAttribute("src", `https://picsum.photos/id/${r1}/200/200`);
$img.setAttribute("alt", "random");
$figure.classList.add("card");


$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://picsum.photos/id/${r2}/200/200" alt="Nature">
    <figcaption>Random 2</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno", "otra"],
$ul = document.createElement("ul");

//> CREANDO LISTA DE ESTACIONES
document.writeln("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li)
})

/* -------------------------------------------------- */
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
$ul2 = document.createElement("ul");

document.writeln("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
// $ul2.innerHTML = "";                        // -> Para llenar dinámicamente se tiene que inicializar vacía
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

//> Fragmentos para mejorar el rendimiento, que sea una sola inserción al DOM y no todo lo de arriba
//* Es una manera más óptima para no pedir tanta demanda de recursos al navegador

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.writeln("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3)