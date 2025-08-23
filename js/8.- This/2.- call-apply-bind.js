// |---------------- this en JavaScript ----------------|
// |----------------- call, apply, bind ----------------|
console.log("------- call, apply, bind -------");

/* 
> call, apply, bind
#   ¿Qué son el call, apply y bind?
*       Si se necesita conservar la referencia de un scope en
*       particular y utilizarlo en una invocación nos sirven 
*       los métodos call, apply, bind.  */

// console.log(this);
this.lugar = "Contexto Global"

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}

saludar("Yo!", "broo");

const obj = {
    lugar: "Contexto Objeto"
}

saludar.call(obj, "Hola", "Luis");                          // -> Recibe el parámetro el cual será el 'contexto'
saludar.call(null, "Hola", "Luis");                         // -> Si tiene 'null' se regresa al contexto global
saludar.call(this, "Hola", "Luis");                         // -> Como estamos en el contexto global, hace referencia a tal, si estuvieramos dentro de una función referenciaría a la función
console.log("---------- apply ------------")
saludar.apply(obj, ["Adiós", "Luis"]);                      // -> Funciona igual pero si queremos pasar más parámetros se usa con '[]'
saludar.apply(null, ["Adiós", "Luis"]);
saludar.apply(this, ["Adiós", "Luis"]);
console.log("----------- bind ------------")

this.nombre = "Window";

const persona = {
    nombre: "Luis",
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    // saludar: persona.saludar.bind(persona)           // -> Enlaza el contexto de la 'persona' y recibe los mismos atributos
    saludar: persona.saludar.bind(this)                 // -> 'bind' enlaza el contexto del parámetro que le pasas
}

otraPersona.saludar();