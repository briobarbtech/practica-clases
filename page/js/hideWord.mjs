/**
 * Oculta la parcialidad de una palabra con '_'
 * 
 * @param {string} palabra palabra a ocultar
 * @returns {Array} que contiene la palabra parcialmente oculta con '_'
 */
export function hideWord(palabra) {
    const letras = palabra.split('');                                           // separamos en un array cada letra de la palabra
    const letrasVisibles = new Set();                                           // creamos un set

    const numLetrasVisibles = Math.floor(Math.random() * 2) + 2;                // Elegir aleatoriamente cuántas letras dejar visibles (entre 2 y 3)

    while (letrasVisibles.size < numLetrasVisibles) {                           // Elegir aleatoriamente qué letras dejar visibles
        const indice = Math.floor(Math.random() * letras.length);
        letrasVisibles.add(indice);                                             // agregamos los indices al set
    }

    let palabraOculta = [];                         // definimos un array que va a almacenar la palabra oculta
    for (let i = 0; i < letras.length; i++) {       // usamos un bucle for para recorrer la variable letras
        if (letrasVisibles.has(i)) {                // si letrasVisibles contiene a i
            palabraOculta.push(letras[i]);          // entonces almacenamos la letra visible correspondiente a ese índice
        } else {
            palabraOculta.push('_');                // sino, procede a almacenar un guión bajo ('_')
        }
    }

    return palabraOculta;                           // devuelve el array con la palabra oculta
}