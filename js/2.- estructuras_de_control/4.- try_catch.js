// |----------------- Manejo de errores -------------------------|
// |-------------------- Try / Catch ----------------------------|
console.log("------- Try / Catch ------- ");

/* 
> Try - Catch
#   ¿Qué es el TRY y el CATCH?
*       Es una estructura que nos permite
*       evaluar ciertos fragmentos de código
*       con el "try" y cuando haya un error 
*       se captura en la parte del catch. */

try {                                           // -> Se agrega el código a evaluar
    console.log("error");
    noExiste;                                   // -> Es una variable no definida
} catch (error) {                               // -> Captura el error que surge en el "try"
    console.log("El error fue: " + error);
} finally {                                     // -> "finally" se ejecuta siempre al final de un try-catch, no suele usarse mucho
    console.log(":)");
}

console.log("--------------------------- ");

try {
    let numero = "y";
    if (isNaN(numero)) {                                // -> isNaN = No es un número -> Valida si no es un número
        throw new Error("solo se permiten números");    // -> throw new Error("mensaje") -> Es un error general, hay más específicos "ErrorEvent", "EvalError", etc... => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
    }

    console.log(numero * numero);
} catch (e) {
    console.log(e);
}