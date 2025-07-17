// |----------------- Estructuras de control -------------------------|
// |--------------------- Object Literal ------------------------------|
console.log("------- Object Literal ------- ");

/* 
> Object Literal
#   ¿Qué es el un Object Literal?
*       Es una nueva forma de escribir atributos
*       y métodos, incluso de asignarlos. */

let nombre = "Chapo", edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function () {
        console.log("Guau guau!")
    }
}

console.log(perro);
perro.ladrar();

/* 
# Nuevas características
* Se reutilizan variables

* Este método se utiliza para agilizar la escritura

*        Si la variable que le vas asignar como 
*        valor a una propiedad del objeto tiene el
*        mismo nombre de la propiedad que estás 
*        pretendiendo asignar, simplemente se guarda así... */

const dog = {
    nombre,                                 //  -> Solo se llama al nombre de la variable
    edad,
    raza: "pug",                            //  -> Si se agrega nueva propiedad, se hace normalmente
    ladrar() {                              //  -> Detecta que es una función
        console.log("Guau guau guau!!")
    }
}

console.log(dog);
dog.ladrar();