// |-----------------------Tipos de datos------------------------------|
// |---------------------- Objects/Objetos ----------------------------|
console.log("------- Objects/Objetos -------");

/* 
> OBJETOS
#   ¿Qué es un objeto?
*     un objeto es un entidad independiente con 
*     propiedades y tipos. Compáralo con una taza, 
*     por ejemplo. Una taza es un objeto con propiedades. 
*     Una taza tiene un color, un diseño, un peso, un 
*     material del que está hecha, etc. Del mismo 
*     modo, los objetos de JavaScript pueden tener 
*     propiedades que definan sus características. */

let a = new String("Hola");
//console.log(a);

const b = {}
console.log(b);

const c = new Object();
console.log(c)

/* 
* Las variables dentro de un objeto
* se le llaman atributos/propiedades.
* A las funciones se les llama métodos.
 */
const person = {
    nombre: "Luis",
    apellido: "Jabalera",
    edad: 25,
    pasatiempo: ["Programar", "Loquear", "Producir"],
    soltero: false,
    contacto:{
        email: "jabaleraluisangel@gmail.com",
        instagram: "@jabalera_luis",
        github: "LuisJabalera",
        movil: 6311918353
    },

    saludar: function (){
        console.log(`Hola :)`)
    },
    sayMyName(){
        console.log(`Hola mi nombres es ${this.nombre} ${this.apellido} y tengo ${this.edad} años, mi pasatiempo favorito es ${this.pasatiempo[0]} y me puedes contactar por mi instagram: ${this.contacto.instagram}`);
        //                                    ⬆                                                                                       ⬆                                                               ⬆
        //     se usa el "this" para referenciar al mismo objeto al que se accede                                      Se accede con coordenadas al array                        Se accede con punto y punto porque es objeto
    }
}

console.log(person);
console.log(person["nombre"]);                  // -> se accede al valor del objeto
console.log(person.nombre);                     // -> se puede acceder con punto
console.log(person["apellido"]);
console.log(person.pasatiempo[0]);              // -> se accede al valor del arreglo
console.log(person.contacto.instagram);         // -> acceder a un arreglo dentro de un arreglo
console.log(person.contacto["movil"]);          // -> se puede acceder igual con nombre o punto
person.saludar();                               // -> la función se ejectuta con el nombreObjeto.funcion
person.sayMyName();

console.log(Object.keys(person));               // -> Lista las llaves del objeto
console.log(Object.values(person));             // -> Te da los valores del objeto
console.log(person.hasOwnProperty("nombre"));   // -> Indica si tiene dentro del objeto la propiedad mencionada