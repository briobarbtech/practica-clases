import { getWord } from "./getWord.mjs";
import { hideWord } from "./hideWord.mjs";
import { verifyWord } from "./verifyWord.mjs";
import { createItemList } from "./createItemList.mjs";
const wordElement = document.getElementById("content-word"); // Elemento que almacena la palabra
const descElement = document.getElementById("content-desc"); // Elemento que almacena la descripción
const userWord = document.getElementById("input-user"); // Input para el usuario
const btnVerify = document.getElementById("btn-submit");
const state = document.getElementById("game-status");
const btnPlayAgain = document.getElementById("btn-play-again");
const ul = document.querySelector("#content-word #ul-word");
// obtener palabra
/* const word = getWord();
wordElement.appendChild(createUnorderList(hideWord(word[0])));
descElement.innerHTML = word[1]; */
btnVerify.addEventListener("click", () => {
  console.log(userWord.value);
  console.log(word[0]);
  if (verifyWord(word[0], userWord.value.trim())) {
    winGame();
  } else {
    state.innerHTML = "Intenta otra vez";
    userWord.value = "";
  }
});
btnPlayAgain.addEventListener("click", () => {
  play();
});
let word = "";
function play() {
  userWord.value = "";
  state.innerHTML = ""
  btnPlayAgain.classList.add("disabled");
  userWord.classList.remove("class", "disabled");
  if (wordElement.classList.contains("disabled")) {
    wordElement.classList.remove("class", "disabled");

  }
  if (btnVerify.classList.contains("disabled")) {
    btnVerify.classList.remove("class", "disabled");
  }
  //state.classList.add("disabled");
  word = getWord();
  const newUl = createItemList(hideWord(word[0]));
  
  ul.innerHTML = newUl;

  descElement.innerHTML = word[1];
  console.log(word[0]);
}
function winGame() {
  // TODO: desactivar los elementos para terminar el juego
  btnPlayAgain.classList.remove("class", "disabled"); 
  state.innerHTML = `¡Ganaste! La palabra era: ${word[0]}`;
  state.classList.remove("class","disabled");
  wordElement.classList.add("disabled");
  userWord.classList.add("disabled");
  btnVerify.classList.add("disabled");
  
}

play();
