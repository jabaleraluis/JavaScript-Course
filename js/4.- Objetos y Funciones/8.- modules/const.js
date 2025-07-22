export const PI = Math.PI;

export let user = "Luis";

let password = "qwerty";
//export default password;                    //* -> Cuando es una variable, primero se declara, luego se exporta


//Si le dejamos la palabra "default" se exporta automáticamente
//Solo se puede hacer con funciones y clases
export default function saludar () {
    console.log("Hola function");
}

const hello = () => console.log("Holaa");

/* export default function saludar2 (){       //* -> Sólo se puede tener un "export default"
    console.log("Holaaaa")
} */

export class Saludar{
    constructor(){
       console.log("Hola clase");
    }
}