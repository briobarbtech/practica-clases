// Definir la clase para un nodo de la lista enlazada
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Definir las variables que vamos a utilizar de forma general
let posicion = 12;
let cantidadDeItems = 100000
// Función para medir el tiempo de ejecución

function calcularTiempo(funcion) {
    const inicio = performance.now();
    funcion();
    const fin = performance.now();
    return fin - inicio;
}

// Crear un array
const tiempoCrearArray = calcularTiempo(() => Array.from({ length: cantidadDeItems }, (_, i) => i));


// Crear una lista
const tiempoCrearLista = calcularTiempo(() => {
    let lista = new Node(0);
    let current = lista;
    for (let i = 1; i < cantidadDeItems; i++) {
        current.next = new Node(i);
        current = current.next;
    }
});


// BORRAR ITEMS 

// Creamos una lista
let lista = () => {
    let lista = new Node(0);
    let current = lista;
    for (let i = 1; i < cantidadDeItems; i++) {
        current.next = new Node(i);
        current = current.next;
    }
    return lista
}

// Calculamos el tiempo que tarda en eliminar un elemento de la lista
const tiempoListaEliminar = calcularTiempo(() => {
    let indice = posicion
    let current = lista()
    let previous = null

    while (current.next != null) {
        if (current.value === indice) {
            if (previous === null) {
                lista = current.next
            } else {
                previous.next = current.next
            }
            break
        }
        previous = current
        current = current.next

    }
})

// Creamos un array
let array = Array.from({ length: cantidadDeItems }, (_, i) => i);
// Calculamos el tiempo que tarda en eliminar un elemento del array
const tiempoArrayEliminar = calcularTiempo(() => {
    array.splice(posicion, 1)
}
)



// AGREGAR
// Calculamos el tiempo que tarda una lista enlazada en agregar un nuevo item a la lista
let tiempoListaAgregar = calcularTiempo(() => {
    let current = lista();

    while (current.next != null) {
        current = current.next
    }
    if (current.next === null) {

        let newNode = new Node(current.value);
        current.next = newNode;
    }
});
// Calculamos el tiempo que tarda un array en agregar un nuevo item
let tiempoArrayAgregar = calcularTiempo(() => array.push(array.length + 1));



// MODIFICAR

// Función para modificar un elemento de la lista enlazada
function modificarElemento(valorBuscado, nuevoElemento) {
    let current = lista();
    let previo = null;

    while (current.next !== null) {
        if (current.value === valorBuscado) {
            let nuevoNodo = new Node(nuevoElemento);
            if (previo === null) {
                nuevoNodo.next = current.next;
                return nuevoNodo;
            } else {
                previo.next = nuevoNodo;
                nuevoNodo.next = current.next;
                return lista;
            }
        }
        previo = current;
        current = current.next;
    }

    return lista;
}

let tiempoListaModificar = calcularTiempo(() => modificarElemento(12, 1999));
let tiempoArrayModificar = calcularTiempo(() => array[12] = 1999);




console.log("-------------------------CREACIÓN---------------------------")
console.log(`Tiempo de creación de lista enlazada: ${tiempoCrearLista} milisegundos`);
console.log(`Tiempo de creación de array: ${tiempoCrearArray} milisegundos`);
if (tiempoCrearLista > tiempoCrearArray) console.log("La lista tarda más en crearse")
else console.log("El array tarda más en crearse")
console.log("--------------------------BORRADO---------------------------")
console.log(`Tiempo para eliminar un elemento en una lista enlazada: ${tiempoListaEliminar} en milisegundos`)
console.log(`Tiempo para eliminar un elemento en un array: ${tiempoArrayEliminar} en milisegundos`)
if (tiempoListaEliminar > tiempoArrayEliminar) console.log("La lista tarda más en eliminar un item")
else console.log("El array tarda más en eliminar un item")
console.log("--------------------------AGREGADO--------------------------")
console.log(`Tiempo para agregar un elemento en una lista enlazada: ${tiempoListaAgregar} en milisegundos`)
console.log(`Tiempo para agregar un elemento en un array: ${tiempoArrayAgregar} en milisegundos`)
if (tiempoListaAgregar > tiempoArrayAgregar) console.log("La lista tarda más en agregar un item")
else console.log("El array trada más en agregar un item")
console.log("--------------------------MODIFICADO--------------------------")
console.log(`Tiempo para modificar un elemento en una lista enlazada: ${tiempoListaModificar} en milisegundos`)
console.log(`Tiempo para modificar un elemento en un array: ${tiempoArrayModificar} en milisegundos`)
if (tiempoListaAgregar > tiempoArrayAgregar) console.log("La lista tarda más en modificar un item")
else console.log("El array trada más en modificar un item")

