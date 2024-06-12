import { palabras, definiciones } from "./abc.mjs";
/**
 * Devuelve un array que contiene una palabra y su definición, obtenido al azar
 * 
 * @returns {Array} 0: palabra, 1: definción
 */
export function getWord() {
    const index = Math.floor(Math.random() * palabras.length)
    return [palabras[index],definiciones[index]]
}