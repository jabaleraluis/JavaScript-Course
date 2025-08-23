// |---------- JSON: JavaScript Object Notation ----------|
// |----------------------- JSON -------------------------|
console.log("---------- JSON ----------");

/* 
> JSON
#   ¿Qué JSON?
*       Es un formato ligero de intercambio de datos, ej. enviar
*       algunos datos desde el servidor al cliente, estos datos
*       pueden ser mostrados en páginas web o viceversa.
#       • parse():
*           Analiza una cadena de texto y lo convierte en un obj
*           válido para JS.
#       • stringify():
*           Convierte un obj o un valor válido en JS y lo convierte
*           a cadena de texto, lo contrario a 'parse'     */

const json = {
    string: "Luis",
    number: 25,
    boolean: true,
    array: ["programar", "jugar"],
    object: {
        instagram: "@jabalera_luis",
        email: "jabaleraluisangel@gmail.com"
    },
    null: null
}

console.log(json);
console.log(JSON);
console.log("{}");                              // -> Lo interpreta como una cadena de texto

console.log("------------ parse ------------");

console.log(JSON.parse("{}"));                  // -> JSON, lo detecta e interpreta como un objeto.
console.log(JSON.parse("[1, 2, 3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("19"));
//console.log(JSON.parse("Hola Mundo"));        // -> Es porque para JavaScript es un cadena de texto normal, no ocupamos el JSON.parse()
console.log(JSON.parse('"Hola Mundo"'));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));

console.log(JSON.parse('{"string": "Luis", "number": 25, "boolean": true, "array": ["programar", "jugar"], "object": { "instagram": "@jabalera_luis", "email": "jabaleraluisangel@gmail.com"}, "null": null}'));

console.log("---------- stringify ----------");

console.log(JSON.stringify({}));                // -> Lo convierte a cadena de texto
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x: 2, y: 3}));

console.log(JSON.stringify(json));