import { palabras, definiciones } from "./abc.mjs";
/**
 * Devuelve un array que contiene una palabra y su definición, obtenido al azar
 * 
 * @returns {Array} 0: palabra, 1: definción
 */
export function getWord() {                                     // declaro una función getWord()
    const index = Math.floor(Math.random() * palabras.length)   // defino una variable, que va a almacenar un número aleatorio entre 0, y la cantidad total de palabras almacenadas
    return [palabras[index],definiciones[index]]                // devolvemos un array que contenga tanto la palabra y la definición que coincidan con la variable anterior usada 
}                                                               // a modo de índice