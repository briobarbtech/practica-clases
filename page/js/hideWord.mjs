/**
 * Oculta la parcialidad de una palabra con '_'
 * 
 * @param {string} palabra palabra a ocultar
 * @returns {string} parcialmente oculto con '_'
 */
export function hideWord(palabra) {
    const letras = palabra.split(''); // ["f","a","n","t","a","s","m","a"]
    const letrasVisibles = new Set();

    // Elegir aleatoriamente cuántas letras dejar visibles (entre 2 y 3)
    const numLetrasVisibles = Math.floor(Math.random() * 2) + 2;

    // Elegir aleatoriamente qué letras dejar visibles
    while (letrasVisibles.size < numLetrasVisibles) {
        const indice = Math.floor(Math.random() * letras.length);
        letrasVisibles.add(indice);
    }

    // Crear la palabra oculta
    let palabraOculta = [];
    for (let i = 0; i < letras.length; i++) {
        if (letrasVisibles.has(i)) {
            palabraOculta.push(letras[i]);
        } else {
            palabraOculta.push('_');
        }
    }

    return palabraOculta;
}