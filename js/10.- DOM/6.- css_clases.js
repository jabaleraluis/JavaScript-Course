// |---------- DOM: Document Object Model ----------|
// |-------- CSS clases -----------|
console.log("----- CSS clases -----");

//> Clases CSS

const  $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
// $card.className = "rotate-14"                        // -> Sirve para reemplazar todas las clases

console.log($card.classList);                           // -> Nos ayuda a evaluar si un elemento tiene una clase en particular
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");                       // -> Para añadir clases
$card.classList.remove("rotate-45");

console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));

//# 'toggle' es como un "interruptor", si el elemento tiene la clase, se la quita, si no, se la agrega.
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");         // -> Reemplaza la clase, primero la que va a reemplazar, segundo la cual es reemplazada

$card.classList.add("opacity-80", "sepia");                 // -> Se pueden agregar más de una clase a la vez, solo separadas por comas
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");