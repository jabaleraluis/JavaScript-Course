// |---------- DOM: Document Object Model ----------|
// |------- Modifying Elements (Old Style) ----------|
console.log("----- Modifying Elements (Old Style) -----");

// > Modificando Elementos (Old Style)

let any = Math.round(Math.random() * 100);

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);                           // -> Igual que 'importNode', true es para que clone todo el contenido

$newCard.innerHTML = `
    <img src="https://picsum.photos/id/${any}/200/200" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[1]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);