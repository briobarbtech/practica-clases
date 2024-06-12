// crear una constante con un array que almacene el abecedario, un espacio, punto, coma, los signos de exclamación e interrogación, y los números naturales
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '.', ',', '¡', '!', '¿', '?', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// escribir un mensaje

// convertir ese mensaje en una secuencia de indices según la posición que ocupa cada caracter del mensaje en el array del abecedario
// recorr 
//

function getFibonacciPosition(position) {
    let fibo0 = 0;
    let fibo1 = 1;

    for (let i = 1; i < position; i++) {
        let fibo3 = fibo0 + fibo1;
        fibo0 = fibo1;
        fibo1 = fibo3;
    }
    return fibo1;
}

function toEncode(message) {
    let encriptedMessage = []
    for (let i = 0; i < message.length; i++) {
        let fibo = getFibonacciPosition(i)
        console.log(fibo)
        let index = abc.findIndex(value => value === message[i])
        console.log(index)
        encriptedMessage.push(index * fibo)
    }
    return encriptedMessage;
}

function toDecode(encriptedMessage) {
    let desencriptedMessage = []
    for (let i = 0; i < encriptedMessage.length; i++) {
        desencriptedMessage.push(encriptedMessage[i] / getFibonacciPosition(i));
    }
    return desencriptedMessage.join('');
}

let message = "ab";
let encriptedMessage = toEncode(message);

