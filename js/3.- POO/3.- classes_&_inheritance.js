// |----------------------- POO --------------------------------|
// |--------------- Classes & Inheritance ----------------------|
console.log("------- Classes & Inheritance ------- ");

/* 
> Clases y Herencias
#   ¿Qué son las Clases y Herencias?
*       
*       
¡       Constructor:
*           El constructor de una clase es un método
*           que se ejecuta en el momento de instanciar
*           la clase.   */

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //métodos
  sonar() {
    console.log("Hago sonido porque estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {                                // -> Hereda la clase padre
    constructor(nombre, genero, tamanio){
        super(nombre, genero);                              // -> Manda a llamar al constructor de la clase padre
        this.tamanio = tamanio;
    }

    sonar(){
        console.log("Soy un perro!");
    }

    ladrar(){
        console.log("Guau Guau!!")
    }
}

const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Grande");

console.log(mimi);
console.log(scooby);

mimi.saludar();
mimi.sonar();

scooby.saludar();
scooby.sonar();
scooby.ladrar();