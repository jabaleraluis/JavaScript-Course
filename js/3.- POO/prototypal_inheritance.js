// |----------------------- POO --------------------------------|
// |-------------- Prototypal Inheritance ----------------------|
console.log("------- Prototypal Inheritance ------- ");

/* 
> Herencia
#   ¿Qué es la Herencia Prototípica?
*       Es la capacidad de poder heredar las
*       características de un padre a un hijo */

function Animal (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function () {
    console.log("Hago sonido porque estoy vivo");
}

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
}

//# Herencia prototípica
function Perro (nombre, genero, raza) {                     // -> Recibe los parámetros, además del que se le asignará
    this.super = Animal;                                    // -> Se invoca al constructor padre dentro de la propiedad
    this.super(nombre, genero);                             // -> Parámetros que recibe el constructor
    this.raza = raza;
}

//Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;                        // ->  Se iguala al mismo contructor y obtiene todas las características de su prototipo padre

//Sobreescritura de métodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
    console.log("Guau guau!!");
}

const snoopy = new Perro("Snoopy", "Macho", "Mediana"),
lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();