// |----------------------- POO --------------------------------|
// |-------- Static methods, getters and setters ---------------|
console.log("------- Static methods, getters and setters ------- ");

/* 
> Métodos estáticos, getters and setters
#   ¿Qué son los Métodos estáticos, getters and setters?
¡       Método estático:
*           Se pueden ejecutar sin necesidad de instanciar la clase.
¡       Getters and Setter:
*           Son métodos especiales que nos permiten establecer y 
*           obtener los valores atributos de nuestra clase.
*       */

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

class Perro extends Animal {
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("Soy un perro!");
    }

    ladrar(){
        console.log("Guau Guau!!")
    }

    static queEres(){
        console.log("Los perros somos animales mamímeros de tipo canino")
    }

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Grande");

console.log(mimi);
console.log(scooby);

mimi.saludar();
mimi.sonar();

scooby.saludar();
scooby.sonar();
scooby.ladrar();

console.log(scooby.getRaza);                            // -> JS lo convierte a una propiedad y lo tenemos que llamar de esta manera
scooby.setRaza = "Gran Danés";                          // -> Se le asigna el valor como si fuera una propiedad
console.log(scooby.getRaza);