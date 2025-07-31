/* 
> Exercise #27 - Programa una clase llamada Pelicula.
#   La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
*       • id de la película en IMDB     • titulo
*       • director                      • año de estreno
*       • país o países de origen       • géneros
*       • calificación en IMBD.

Todos los datos del objeto son obligatorios.

#   Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
#   Valida que el título no rebase los 100 caracteres.
#   Valida que el director no rebase los 50 caracteres.
    #   Valida que el año de estreno sea un número entero de 4 dígitos.
    #   Valida que el país o paises sea introducidos en forma de arreglo.
    #   Valida que los géneros sean introducidos en forma de arreglo.
    #   Valida que los géneros introducidos esten dentro de los géneros aceptados*.
    #   Crea un método estático que devuelva los géneros aceptados*.
    #   Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
    #   Crea un método que devuelva toda la ficha técnica de la película.
    #   Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de 
    #   forma automatizada e imprime la ficha técnica de cada película.

#   Géneros Aceptados:
*   • Action        • Adult         • Adventure     • Animation     • Biography
*   • Comedy        • Crime         • Documentary   • Drama         • Family
*   • Fantasy       • Film Noir     • Game-Show     • History       • Horror
*   • Musical       • Music         • Mystery       • News          • Reality-TV
*   • Romance       • Sci-Fi        • Short         • Sport         • Talk-Show
*   • Thriller      • War           • Western.      */

/* let idRegExp = /^[ttTT]{2}\d{7}$/,
    tituloRegExp = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ0-9.,:;!?'"&()\+-_\/ ]{1,100}$/,
    directorRegExp = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ.,'& ]/; */

class Pelicula {
    constructor({ idIMDB, titulo, director, year, paises, genre, rating }) {
        this.idIMDB = idIMDB;
        this.titulo = titulo;
        this.director = director;
        this.year = year;
        this.paises = paises;
        this.genre = genre;
        this.rating = rating;

        this.validarIMDB(idIMDB);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarYear(year);
    }

    validarCadenas(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío...`);
        if (typeof valor !== "string")
            return console.error(`${propiedad} "${valor}" ingresado NO es texto...`);

        return true;
    }

    validarLongitudCadenas(propiedad, valor, longitud) {
        if (valor.length > longitud)
            return console.warn(
                `${propiedad} "${valor}" excede el número de caracteres permitidos(${longitud})...`
            );

        return true;
    }

    validarIMDB(idIMDB) {
        if (this.validarCadenas("IMDB id", idIMDB)) {
            if (!/^([tt]){2}\d{7}$/.test(idIMDB)) {
                return console.error(
                    `El IMDB id "${idIMDB}" debe empezar con 'tt' seguido de 7 números.`
                );
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadenas("Título", titulo)) {
            this.validarLongitudCadenas("Título", titulo, 100);
        }
    }

    validarDirector(director) {
        if (this.validarCadenas("Director", director)) {
            this.validarLongitudCadenas("Director", director, 50);
        }
    }

    validarNumeros(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío...`);
        if (Math.sign(valor) === -1)
            return console.warn(`${propiedad} "${valor}" NO puede ser negativo...`);
        if (typeof valor !== "number")
            return console.error(`${propiedad} "${valor}" ingresado NO es un número...`);

        return true;
    }

    validarYear(year) {
        if (this.validarNumeros("Año", year)) {
            if (!/^([0-9]){4}$/.test(year))
                return console.error(`El año "${year}" debe contener 4 dígitos...`);
        }
    }

    validarArray(propiedad, valor) {
        if (!valor || valor.length === 0) return console.warn(`${propiedad} "${valor} está vacío..."`);
        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor} NO es un arreglo..."`);
        for (let cadena of valor) {
            if (typeof cadena !== "number") return console.error(`El valor de ${cadena}, NO es texto...`);
        }
    }

    /* validacion() {
    // ID de IMDB
        if (!this.idIMDB || this.idIMDB.trim() == "") {
            throw new Error("El ID de IMDB es obligatorio...");
        }
        if (this.idIMDB.length > 9) {
            throw new Error("El ID de IMDB NO puede tener más de 9 dígitos...");
        }
        if (!idRegExp.test(this.idIMDB)) {
            throw new Error("El ID de IMDB debe empezar con 'tt' seguido de 7 números.");
        }
    // Título
        if (!this.titulo || this.titulo.trim() == "") {
            throw new Error("El título es obligatorio...");
        }
        if (this.titulo.length > 100) {
            throw new Error("El título no debe contener más de 100 caracteres");
        }
    // Director
        if (this.director === undefined || this.director === "") {
            throw new Error("El director es obligatorio...");
        }
        if (typeof this.director !== "string" || !directorRegExp.test(this.director)) {
            throw new Error("El director debe ser de tipo texto...");
        }
        if (this.director.length > 50) {
            throw new Error("El director no debe contener más de 50 caracteres...");
        }        
    } */

    /* mostrarInfo() {
        this.validacion();
        console.log(`ID de IMBM: ${this.idIMDB}
        \nTítulo: ${this.titulo}
        \nDirector: ${this.director}
        \n`);
    } */
}

/* try {
    const pelicula = new Pelicula("tt1341343", "Dr. Strangelove (1964)", "Juan López O'conor");
    pelicula.mostrarInfo();
} catch (error) {
    console.error(error.message);
} */

const pelicula = new Pelicula({
    idIMDB: "tt1234567",
    titulo: "Luis Jabalera",
    director: "Enrique Segoviano",
    year: 2025
});
