// |----------------------- POO --------------------------------|
// |-------------------- Prototipos ----------------------------|
console.log("------- Prototipos ------- ");

/* 
> Prototipos
#   ¿Qué son los Prototipos?
*       Es un objeto padre que todos los objetos
*       y funciones tienen por defecto, sirve para
*       compartir propiedades y métodos entre objetos
*       sin tener que copiarlos en cada uno.
*
#   Conceptos importantes:
¡       • Clases:
*           Es un modelo a seguir.
¡       • Objetos:
*           Es una instancia de una clase.                      //¡ Instancia: "Es una copia de una plantilla"
¡           - Atributos:
*               Es una característica o pripiedad
*               del objeto (son variables dentro)
*               de un objeto.
¡           - Métodos:
*               Son las acciones que un objeto puede
*               realizar (son funciones dentro de un
*               objeto). */


const animal = {
    nombre: "Snoopy",
    sonar() {
        console.log("Hago sonido porque estoy vivo");
    }
}

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Novia de Bugs Bunny");
    }
}

console.log(animal);
console.log(animal2);

console.log("---------------------------");

//> Función constructora
/*
*Función constructora donde se asignan los métodos al prototipo, no a la función
Atributos                                                   // -> En vez de estar copiando y pegando, conviene usar una función constructora
 function Animal (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;

métodos                                               
    this.sonar = function () {
        console.log("Hago sonido porque estoy vivo");
    }
    
    this.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    }
} */

//*Métodos agregados al prototipo de la función constructora
//Atributos
function Animal (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}                                                       // -> Para que no se estén duplicando métodos innecesarios, es mejor sacarlos de la función, y pegarlos al prototipo
//métodos                                               // -> Así no gastamos memoria, y mejora el rendimiento                    
Animal.prototype.sonar = function () {
    if (this.genero==="Macho") {
        console.log("Hago sonido porque estoy vivo");
    } else {
        console.log("Hago sonido porque estoy viva");
    }
}

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
}

const snoopy = new Animal("Snoopy", "Macho"),
lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
lolaBunny.sonar();
lolaBunny.saludar();