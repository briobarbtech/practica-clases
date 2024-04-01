const readline = require('readline');   // Importamos una libreria llamada readLine

const rl = readline.createInterface({   // Definimos una constante llamada rl donde 
    input: process.stdin,               // creamos la interface que nos permitirá acceder a la consola
    output: process.stdout
  });

rl.question('¿Cómo te llamas? ', (answer) => {          // Utilizamos el método question() donde escribimos nuestra pregunta,
                                                        // y pasamos como parametro la respuesta
    let helloWorld = "Hello " + answer + ", Welcome!";  // luego definimos una variable donde almacenamos un texto junto a la respuesta
    let helloWorldAsArray = helloWorld.split('')         // y utilizamos otro método para convertir un texto en array
    let counter = 0;                                    // definimos un contador para manejar el bucle While

    while(counter < helloWorldAsArray.length){           // desarrollamos la estructura del while, y decimos "Mientras counter sea menor a el largo del array helloWorldAsArray"
        let word = "";                                   // ejecutamos el siguiente código. Definimos una variable word vacío.   
        for (let i = 0; i <= counter; i++) {             // definimos un ciclo for donde cada vuelta va a agregar a word una de las letras contenidas en helloWorldAsArray
            word = word + helloWorldAsArray[i]           
        }
        counter++                                        // aumentamos el contador en una (1) unidad a la vez 
        setTimeout(() => {                               // definimos un setTimeout() para generar un delay en la presentación de la palabra
            console.log(word);                           // este setTimeout() va a mostrar en cada vuelta el contenido de word, pero el tiempo va a variar según 100ms * por el contador.
          }, 100*counter);                               // es decir que cada vez se tardará más, ya que el contador aumenta y entonces el tiempo que tarda el setTimeout en ejecutarse 
    }                                                    // también.
    rl.close();                                          // cerramos readLine() para liberar la terminal.
  });

