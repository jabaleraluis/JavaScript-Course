/* 
> Excercise #18
*   Programa una función que dada una cadena de texto cuente 
*   el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
*   devuelva Vocales: 4, Consonantes: 5.
> Excercise #19
*   Programa una función que valide que un texto sea un nombre válido, 
*   pe. miFuncion("Jonathan MirCha") devolverá verdadero.
> Excercise #20
*   Programa una función que valide que un texto sea un mail válido, 
*   pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* 
> Excercise #18
*   Programa una función que dada una cadena de texto cuente 
*   el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
*   devuelva Vocales: 4, Consonantes: 5. */

/* const excercise18_1 = (cadena = "") => {
    const vocales = ["a", "e", "i", "o", "u"];
    let c = 0;
    let v = 0;

    cadena = cadena.toLowerCase();
    cadena = cadena.split("").join("");
    
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])){
            v ++;
        }
        else {
            c ++;
        }
    }

    console.log(`La palabra "${cadena}" tiene ${v} vocales y ${c} consonantes`);
    console.log(cadena.length)
} */

const excercise18 = (cadena = "") => {
    if (!cadena) return console.warn("Ingresa una cadena...");
    if (typeof cadena !== "string") console.warn("Solo se permite texto...");

    let v = 0,
        c = 0;
    
    for (let letra of cadena) {
        if (/[aeiouAEIOU]/.test(letra)){
            v ++;
        }
        if (/[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/.test(letra)){
            c ++;
        }
    }
    
    console.log(`La palabra "${cadena}" tiene ${v} vocales y ${c} consonantes`);
    console.table({
        Texto: cadena,
        Vocales: v,
        Consonantes: c
    })
}

console.group("Ejercicio 18: ");
excercise18("Hola mundo");
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #19
*   Programa una función que valide que un texto sea un nombre válido, 
*   pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const excercise19 = (nombre = "") => {
    if (!nombre) return console.warn("Ingresa un nombre...");
    if (typeof nombre !== "string") return console.warn("Solo se permite texto...");

    const realName = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){0,2}$/;
    const realName2 = /^[A-Za-zÑñáéíóúÁÉÍÚÓ\s]+$/g.test(nombre);                   // -> "^" no puede haber nada antes de la expresión, "$" -> No puede haber nada despés de la expresión

    if (realName.test(nombre.trim())) {
        console.log(`Nombre "${nombre}" válido.`)
    } else {
        console.error("Ingrese un nombre real válido.");
    }
}

console.group("Ejercicio 19:");
excercise19("Luis Angel");
excercise19("xJQMkGNfLuiL");
console.groupEnd();
console.log("--------------------");

/* 
> Excercise #20
*   Programa una función que valide que un texto sea un mail válido, 
*   pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const excercise20 = (mail = "") => {
    if (!mail) return console.warn("Ingresa un correo...");
    if (typeof mail !== "string") return console.warn("Solo se permite texto...");

    const validMail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(mail);
    const validMail2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(mail);
    const validMailPro = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,15}$/.test(mail)

    return (validMailPro)
    ? console.log(`El Correo "${mail}" es válido.`)
    : console.error("Correo no válido.");
}

console.group("Ejercicio 20:");
excercise20("jabalera@gmail.com");
excercise20("jasda_lssa@ed.com");
console.groupEnd();
console.log("--------------------");