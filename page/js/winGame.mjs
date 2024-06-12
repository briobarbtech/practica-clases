// importamos las funciones y variables que vamos a necesitar en este archivo
const btnPlayAgain = document.getElementById("btn-play-again");   // Botón para reinciar el juego
const stateGame = document.getElementById("game-status");         // Elemento que acusa el estado del juego (errores y aciertos)
const wordElement = document.getElementById("content-word");      // Elemento que almacena la palabra
const userWord = document.getElementById("input-user");           // Input para el usuario
const btnVerify = document.getElementById("btn-submit");          // Botón que verifica si la palabra es correcta
/**
 * Genera los cambios necesarios una vez se ha acabado el juego y el usuario ha ganado
 * 
 * @param {string} word palabra del juego
 */
export function winGame(word) {
  btnPlayAgain.classList.remove("class", "disabled");             // una vez que ganamos, debemos permitir visualizar el btn de jugar otra vez, para poder reinicar la partida
  stateGame.innerHTML = `¡Ganaste! La palabra era: ${word[0]}`;   // insertamos un texto en el stateGame para acusar que se ha ganado
  stateGame.classList.remove("class","disabled");                 // quitamos la clase 'disable' al stateGame para que este se pueda visualizar
  wordElement.classList.add("disabled");                          // ocultamos el elemento que muestra la palabra oculta
  userWord.classList.add("disabled");                             // ocultamos el campo de texto del usuario
  btnVerify.classList.add("disabled");                            // ocultamos el botón de verificar, ya que una vez terminado el juego, no tiene sentido seguir verificando
}