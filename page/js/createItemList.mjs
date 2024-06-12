/**
 * Devuelve una serie de elementos de tipo li
 * 
 * @param {Array} elements array de elementos (string)
 * @returns {string} lista de items
 */
export function createItemList(elements) {
  let itemList = ''
  for (let i = 0; i < elements.length; i++) {
    const item = elements[i];
    let li = `<li>${item}</li>`
    itemList += li;
  }
  return itemList;
}
