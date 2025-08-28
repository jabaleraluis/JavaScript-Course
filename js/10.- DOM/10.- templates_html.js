// |---------- DOM: Document Object Model ----------|
// |------- Templates HTML ----------|
console.log("----- Templates HTML -----");

/* 
> Templates HTML
*   Es como un modelo a seguir en el cual tu estructuras
*   el contenido HTML que quieras mediante JS se convierta
*   en dinámico.    */

const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-cards").content,      // -> Apunta al template, pero a su contenido, no a la etiqueta
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnología",
        img: "https://picsum.photos/id/24/200/200"
    },
    {
        title: "Animales",
        img: "https://picsum.photos/id/83/200/200"
    },
    {
        title: "Aquitectura",
        img: "https://picsum.photos/id/62/200/200"
    },
    {
        title: "Gente",
        img: "https://picsum.photos/id/19/200/200"
    },
    {
        title: "Naturaleza",
        img: "https://picsum.photos/id/34/200/200"
    },
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);              // -> En el HTML, solo puede haber un template, si yo lo uso para la primer tarjeta, ya no estaría disponible para la 2da, 3ra, etc. Por eso se crea un clon de dicho nodo, usando el siguiente método.
//                                      ↑         ↑
//                            De quien se basa | se copia toda la estructura y no solo la etiqueta de apertura y cierre
    $fragment.appendChild($clone);
});

$cards.append($fragment);