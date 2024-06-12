// importamos las funciones y variables que vamos a necesitar en este archivo
import { getWord } from "./getWord.mjs";
import { hideWord } from "./hideWord.mjs";
import { verifyWord } from "./verifyWord.mjs";
import { createItemList } from "./createItemList.mjs";
import { winGame } from "./winGame.mjs";

const wordElement = document.getElementById("content-word");    // Elemento que almacena la palabra
const descElement = document.getElementById("content-desc");    // Elemento que almacena la descripción
const userWord = document.getElementById("input-user");         // Input para el usuario
const btnVerify = document.getElementById("btn-submit");        // Botón que verifica si la palabra es correcta
const stateGame = document.getElementById("game-status");       // Elemento que acusa el estado del juego (errores y aciertos)
const btnPlayAgain = document.getElementById("btn-play-again"); // Botón para reinciar el juego
const ul = document.querySelector("#content-word #ul-word");    // elemento que contiene la lista de letras

// AddEventListener  Con el método .addEventListener() permite añadir una escucha del evento indicado. Más info: https://lenguajejs.com/javascript/eventos/addeventlistener/
btnVerify.addEventListener("click", () => {
  if (verifyWord(word[0], userWord.value.trim())) {   // verificamos mediante una función si la palabra del juego y la del usuario coinciden
    winGame(word)                                     // en caso de que sí, ejecutamos la función de winGame() para dar el juego por terminado
  } else {
    stateGame.classList.remove('disabled');               // en caso contrario, al elemento stateGameGame, le vamos a quitar la clase 'disabled' para hacerla visible
    stateGame.innerHTML = "Intenta otra vez"              // y le agregamos el texto "inteta otra vez"
    userWord.value = "";                                  // seteamos el input del usuario con un string vacío para vaciar el campo de texto
    setTimeout(()=>{                                      // establecemos un temporizador que agregará la etiqueta 'disabled' a stateGame, para que desaparezca a los 3s
      stateGame.classList.add('disabled')
    },3000)
  }
});
btnPlayAgain.addEventListener("click", () => {            // agregamos un registro al evento 'click' en el botón, para ejecutar la función play() cada vez que se oprima ese botón
  play();
});

// Palabra vacía
let word = "";                                            // definimos e inicializamos una variable llamada word, que va a almacenar la palabra con la que vamos a jugar
function play() {                                         // definimos la función play() que va a manejar los estados del juego
  userWord.value = "";                                    // seteamos el input del usuario con un string vacío para vaciar el campo de texto
  stateGame.innerHTML = ""                                // seteamos el stateGame con un string vacío para vaciar el elemento
  btnPlayAgain.classList.add("disabled");                 // ocultamos el btnPlayAgain porque al iniciar el juego no es necesario
  userWord.classList.remove("class", "disabled");         // eliminamos la clase 'disabled' del input del usuario para que se pueda visualizar el campo de texto
  if (wordElement.classList.contains("disabled")) wordElement.classList.remove("class", "disabled");  // Acá revisamos si wordElement y btnVerify tienen la clase 'disabled'
  if (btnVerify.classList.contains("disabled")) btnVerify.classList.remove("class", "disabled");      // en caso de tenerla se les eliminará a ambas
  
  word = getWord();                                        // obtenemos un array que contendrá una palabra y una descripción
  const hiddenWord = hideWord(word[0])                     // mediante una función, generamos un nuevo array con letras ocultas
  const newUl = createItemList(hiddenWord);         //  creamos una serie de elementos li con una función que contenga en cada li una letra del array anterior

  ul.innerHTML = newUl;                             // insertamos los li que generamos recién en el elemento ul de nuestro DOM, reemplazando cualquier otra lista que pudiera contener
  descElement.innerHTML = word[1];                  // insertamos la descripción en el elemento definido para ello en el DOM

  console.log(word[0]);                             // console.log que muestra la palabra en la consola, con fines de hacer trampa y poder ver la respuesta correcta
}


play();                                             // llamamos a la función que inicia nuestro juego
