import { getWord } from "./getWord.mjs";
import { hideWord } from "./hideWord.mjs";
import { verifyWord } from "./verifyWord.mjs";
import { createItemList } from "./createItemList.mjs";
import { winGame } from "./winGame.mjs";
const wordElement = document.getElementById("content-word"); // Elemento que almacena la palabra
const descElement = document.getElementById("content-desc"); // Elemento que almacena la descripción
const userWord = document.getElementById("input-user"); // Input para el usuario
const btnVerify = document.getElementById("btn-submit");
const state = document.getElementById("game-status");
const btnPlayAgain = document.getElementById("btn-play-again");
const ul = document.querySelector("#content-word #ul-word");

// AddEventListener
btnVerify.addEventListener("click", () => {
  if (verifyWord(word[0], userWord.value.trim())) {
    winGame(word)
  } else {
    state.classList.remove('disabled');
    state.innerHTML = "Intenta otra vez"
    userWord.value = "";
    setTimeout(()=>{
      state.classList.add('disabled')
    },3000)
  }
});
btnPlayAgain.addEventListener("click", () => {
  play();
});

// Palabra vacía
let word = "";
function play() {
  userWord.value = "";
  state.innerHTML = ""
  btnPlayAgain.classList.add("disabled");
  userWord.classList.remove("class", "disabled");
  if (wordElement.classList.contains("disabled")) wordElement.classList.remove("class", "disabled");
  if (btnVerify.classList.contains("disabled")) btnVerify.classList.remove("class", "disabled");
  
  word = getWord();

  const newUl = createItemList(hideWord(word[0]));
  
  ul.innerHTML = newUl;
  descElement.innerHTML = word[1];

  console.log(word[0]);
}


play();
