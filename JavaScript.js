/*
> Identificadores:
# Deben comenzar con:  */

var a = 5               // * -> Letra minúscula
var $a = 5              // * -> Signo de peso
var _a = 5              // * -> Guión bajo

/* 
> Ordenamiento de código
# 1.- Importación de módulos
# 2.- Declaración de variables
# 3.- Declaración de funciones
# 4.- Ejecución de código
*/

/*
> Buenas prácticas
#    Nombrar el archivo con _
*    Example    ->      "mi_archivo.js" */

// > UpperCamelCase
// #    CLASES:
        class serHumano{
            constructor (nombre, genero) {
                this.nombre = nombre
                this.genero = genero
            }

            miNombreEs (){
                return 'Mi nombre es ${this.nombre}'
            }
        }

// > lowerCamelCase
// #    Objetos: 
        const unObjeto = {
            nombre: 'Luis'
        }

// #    Primitivos:
        let unaCadena = 'Hola Mundo',
            unNumero = 19,
            unBoolean = true

// > Funciones:
        function holaMundo (nombre) {
            alert('Hola Mundo ${nombre}')
        }
        holaMundo('Luis')

/*  
> Palabras reservadas
#    A: abstract
#   B: boolean, break, byte
#    C: case, catch, char, class, const, continue
#    D: debugger, default, delete, do, double
#    E: else, enum, export, extends
#    F: false, final, finally, float, for, function
#    G: goto
#    I: if, implements, import, in, instanceof, int, interface
#    L: long
#    N: native, new, null
#    P: package, private, protected, public
#    R: return
#    S: short, static, super, switch, synchronized
#    T: this, throw, throws, transient, true, try, typeof
#    V: var, volatile, void
#    W: while, with */

/*
> Ordenamiento de código (opcional pero recomendado)
#   1.- Importación de módulos
#   2.- Declaración de variables
#   3.- Declaración de funciones
#   4.- Ejecución de código */

/* 
> Tipos de datos JavaScript
#   1.- Primitivos: se accede directamente al valor.
*       • string
*       • number
*       • boolean
*       • null
*       • undefined
*       • NaN

#   2.- Compuestos: se accede a la referencia del valor.
*       • object = {}
*       • array = []
*       • function (){}
*       • Class {}
*       • etc */

/*
> Variables
#   var = global (mejor no usar)
#   let = bloque */