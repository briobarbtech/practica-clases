import { palabras, definiciones } from "./abc.mjs";

export function getWord(indice) {
    const index = Math.floor(Math.random() * palabras.length)
    return [palabras[index],definiciones[index]]
}