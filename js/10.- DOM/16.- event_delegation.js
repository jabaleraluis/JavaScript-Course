// |---------- DOM: Document Object Model ----------|
// |------ Event Delegation --------|
console.log("----- Event Delegation -----");

/*
> Delegación de Eventos:
*       Se puede evitar la propagación porque se asigna al
*       nodo superior.  */

//const $divEventos = document.querySelectorAll(".eventos-flujo div"),
//$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
}

document.addEventListener("click", (e) => {             // -> Estamos asignando el evento 'click' al documento, y poniendo condicional cuando se clickee algo en específico.
    console.log("Click en: ", e.target);

    if (e.target.matches(".eventos-flujo div")){        // -> Como coindice con el selector de la variable $divEventos, ya no se ocupa la declaración de variables.
        flujoEventos(e);
    };

    if (e.target.matches(".eventos-flujo a")){
        alert("Hola desde MDN");
        e.preventDefault();
        //e.stopPropagation();                          // -> Como se asigna el click al 'document' que es el nodo raíz, ya no hay un elemento padre después de él, así que ya no es necesario.
    };
});