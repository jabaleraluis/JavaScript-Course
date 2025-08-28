// |---------- DOM: Document Object Model ----------|
// |------- Modifying Elements (Cool Style) ----------|
console.log("----- Modifying Elements (Cool Style) -----");

/*
> Modificando Elementos (Cool Style)
#   • InsertAdjacent
*       .insertAdjacentElement      (position, el)
*       .insertAdjacentHTML         (position, html)
*       .insertAdjacentText         (position, text)
#   • Posiciones:
*       "beforebegin"               (hermano anterior)
*       "afterbegin"                (primer hijo)
*       "beforeend"                 (último hijo)
*       "anterend"                  (hermano siguiente)
*/

let any = Math.round(Math.random() * 100);

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

// $newCard.innerHTML = `
//     <img src="https://picsum.photos/id/${any}/200/200" alt="Any">
//     <figcaption>Any</figcaption>
// `;
let $contentCard = `
    <img src="https://picsum.photos/id/${any}/200/200" alt="Any">
    <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
// $cards.insertAdjacentElement("afterbegin", $newCard);

//$cards.prepend($newCard);                   // -> 'prepend': agrega al hijo primero
//$cards.before($newCard);                    // -> 'before': agrega como hermano anterior
//$cards.append($newCard);                    // -> 'append': agrega al último hijo
$cards.after($newCard);                       // -> 'after': agrega como hermano posterior