// |----------------- Estructuras de control -------------------------|
// |-------------------- Arrow Functions ----------------------------|
console.log("------- Arrow Functions ------- ");

/* 
> Arrow Functions
#   ¿Qué son las Arrow Functions?
*       Es una nueva forma de escribir funciones
*       anónimas, que sean expresadas */


//# Función declarada
//saludar();        // -> Antes no se puede ejecutar
const saludar = function() {
    console.log("Hola");
}

saludar();

//Arrow function
const saludo = nombre => console.log(`Hola ${nombre}`);     // -> Si solo se recibe un parámetro no es necesario los ()
saludo("Luis");

const suma = function (a, b) {                              // -> función normal
    return a + b;
}

const sumar = (a, b) => a + b;                              // -> Si se reciben 2 o más, se ponen entre paréntesis
console.log(sumar(8,9));                                    // -> Se puede hacer el return directamente después del "=>"

const variasLineas = () => {                                // -> Ya no se puede hacer un return implícito, debe llevar las "{}"
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

variasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(e, i){
    console.log(`El elemento ${e}, está en la posición ${i}`)
})

numeros.forEach((el, ind) => console.log(`${el}, está en ${ind}`));

const perro = {
    nobre: "Chapo",
    ladrar: function() {
        console.log(this);          // -> Se ejecuta en el contexto del bloque
    }
}
perro.ladrar();

const gato = {
    nombre: "heshi",
    maullar: () => {
        console.log(this);          // -> Se ejecuta en el contexto global
    }
}
gato.maullar();

const pajaro = {
    nobre: "Currito",
    graznar() {                     // -> Nuevo método y mejor práctica
        console.log(this);          // -> Se ejecuta en el contexto del bloque
    }
}
pajaro.graznar();