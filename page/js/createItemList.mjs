/**
 * Devuelve una serie de elementos de tipo li
 * 
 * @param {Array} elements array de elementos (string)
 * @returns {string} lista de items
 */
export function createItemList(elements) {        // defino una función que recibe un array de elementos como parametro
  let itemList = ''                               // declaro e inicializo una variable con un string vacío
  for (let i = 0; i < elements.length; i++) {     // mediante un bucle for recorro cada elemento del array
    const item = elements[i];                     // almaceno ese elemento de forma temporal en una variable llamada item
    let li = `<li>${item}</li>`                   // y declaro otra variable llamada li que será un elemento de html de tipo li, donde inserto el elemento anterior
    itemList += li;                               // concateno la variable recién inicializada a la variable itemlist
  }
  return itemList;                                // devuelvo la lista de items (itemList)
}
