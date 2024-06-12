export function createItemList(elements) {
  let itemList = ''
  for (let i = 0; i < elements.length; i++) {
    const item = elements[i];
    let li = `<li>${item}</li>`
    itemList += li;
  }
  return itemList;
}
