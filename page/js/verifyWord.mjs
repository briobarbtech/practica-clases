/**
 * Compara dos strings y verifica si son iguales
 * 
 * @param {string} word palabra del juego
 * @param {string} userWord palabra ingresada por el usuario
 * @returns true | false
 */
export function verifyWord(word, userWord) {    // defino una función llamada verifyWord que recibe dos parametros
    if (userWord === word) {                    // si ambos parametros son iguales, entonces devuelve true.
      return true;
    }else return false                          // caso contrario, devuelve false
  }