const btnPlayAgain = document.getElementById("btn-play-again");
const state = document.getElementById("game-status");
const wordElement = document.getElementById("content-word"); // Elemento que almacena la palabra
const userWord = document.getElementById("input-user"); // Input para el usuario
const btnVerify = document.getElementById("btn-submit");

export function winGame(word) {
  
  btnPlayAgain.classList.remove("class", "disabled"); 
  state.innerHTML = `¡Ganaste! La palabra era: ${word[0]}`;
  state.classList.remove("class","disabled");
  wordElement.classList.add("disabled");
  userWord.classList.add("disabled");
  btnVerify.classList.add("disabled");
  
}