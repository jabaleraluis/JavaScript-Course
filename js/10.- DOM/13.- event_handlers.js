// |---------- DOM: Document Object Model ----------|
// |--------------- Event Handlers -----------------|
console.log("----- Event Handlers -----");

/*
> Manejadores de Eventos
*   Los eventos son aquel mecanismo que tenemos en JS para
*   poder controlar las acciones del usuario y definir ciertos
*   comportamientos del documento que sucedan en cierto momento
*   o cuando se cumplan algunas condiciones.

*   Hay 3 maneras de activar los eventos...
*   - Directamente en el HTML - (No recomendable)
*   - Mandar a llamar una función
*   - Evento semántico (con un id)
*/

function holaMundo(){
    alert("Hola mundo");
    console.log(event);
}

function saludar(nombre = "unknown") {
    alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");


$eventoSemantico.onclick = holaMundo;           // -> Manda a llamar a la función, PERO sin los paréntesis
$eventoSemantico.onclick = function(e) {        // -> Los eventos semánticos solo permiten una función a la vez
    alert("Manejador de Eventos Semántico");
    console.log(e);
}

$eventoMultiple.addEventListener("click", holaMundo);
//                                  ↑          ↑
//                               Evento     Función
$eventoMultiple.addEventListener("click", (e) => {
    alert("Manejador de Eventos Múltiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

//$eventoMultiple.addEventListener("click", saludar);             // -> No recibe otro parámetro que no sea el 'event'
$eventoMultiple.addEventListener("click", () => {                 // -> Se ejecuta al momento de dar click porque la función manejadora es la arrow function
    saludar();
    saludar("Luis");
});

//* Eliminar eventos múltiples

const removerDblClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    $eventoRemover.removeEventListener("dblclick", removerDblClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDblClick);

/* $eventoRemover.addEventListener("dblclick", (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    $eventoRemover.removeEventListener("dblclick");              // -> Como recibe dos argumentos, no puede ser arrow function porque tiene que estar declarada
}); */