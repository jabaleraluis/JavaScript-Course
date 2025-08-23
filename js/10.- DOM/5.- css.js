// |---------- DOM: Document Object Model ----------|
// |-------- CSS Styles & Variables -----------|
console.log("----- CSS Styles & Variables -----");

/* 
> Estilos y Variables CSS
*   
*   */

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);                    // -> Las propiedades en js están en 'lowerCamelCase'
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

//* Computed property
// console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");          // -> Como la propiedad se define como cadena de texto, aplica la sintaxis normal de css
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
/* $linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto"; */
$linkDOM.style.margin = "1rem auto"
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

// console.log($linkDOM.style);
// console.log(getComputedStyle($linkDOM));

//* Variables CSS - Custom Properties CSS
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "pink");