// |---------- DOM: Document Object Model ----------|
// |-------- Texto & HTML -----------|
console.log("----- Texto & HTML -----");

//> Texto y HTML


const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
        API para documentos HTML y XML.
    </p>
    <p>
        Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

 
//* Cómo podemos reemplazar el contenido de "$whatIsDOM", hay varias formas:

$whatIsDOM.innerText = text;                            // -> 'innerText' fue creada para IE, 'textContent' es la propiedad estándar.
$whatIsDOM.textContent = text;                          // -> Se ven las etiquetas pero sin tabulaciones del template string, solo sirve para insertar texto
$whatIsDOM.innerHTML = text;                            // -> Inserta contenido HTML, respeta las etiquetas, sirve para insertar código HTML
$whatIsDOM.outerHTML = text;                            // -> Reemplaza el contenido de 'que-es' y reemplaza lo que le pasemos.
