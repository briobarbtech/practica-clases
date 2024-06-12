//primero vamos a crear dos constantes con un array cada uno que contenga en una la palabra y en otra sus definiciones
const palabras = [
    "fantasma", "melancolía", "laberinto", "efímero", "añoranza", "crepúsculo", "serendipia", "efervescente", "furtivo", "enigma",
    "resiliencia", "quimera", "lúgubre", "espectro", "alboroto", "insólito", "ambivalencia", "melodía", "plétora", "efluvio",
    "arcano", "inopia", "incógnita", "paradoja", "nebulosa", "nostalgia", "vorágine", "álgido", "desasosiego", "espasmo",
    "alocución", "áfido", "ignoto", "ínfimo", "lozano", "rumiar", "suculento", "ubérrimo", "vericueto", "zozobra",
    "ebullición", "filántropo", "galimatías", "huraño", "índice", "júbilo", "kermés", "lacerante", "mácula", "némesis",
    "ósculo", "pérfido", "quimera", "reticente", "solipsismo", "tácito", "umbrales", "virulento", "wéstern", "xenofobia",
    "yermo", "zigurat", "asaz", "meollo", "chisgarabís", "socaire", "soslayo", "vahído", "yacer", "zahorí",

];

const definiciones = [
    "Supuesta aparición de una persona muerta.", "Sentimiento vago de tristeza.", "Conjunto complicado y confuso de cosas.", "Que dura por poco tiempo.", "Sentimiento de nostalgia o deseo de algo lejano en el tiempo.",
    "Claridad que hay al amanecer y al anochecer.", "Descubrimiento afortunado e inesperado que se produce cuando se está buscando algo diferente.", "Que desprende burbujas de gas.", "Que se hace a escondidas o de manera disimulada.", "Algo difícil de entender o interpretar.",
    "Capacidad de adaptación de un ser vivo frente a un agente perturbador o un estado o situación adversos.", "Ilusión o esperanza que se anhela pero es imposible de realizar.", "Triste, fúnebre.", "Imagen fantasmal.", "Ruido grande y confuso.",
    "Que es raro o inusual.", "Coexistencia de dos sentimientos contrarios hacia una misma persona o cosa.", "Sucesión agradable de sonidos.", "Exceso de algo, especialmente de sangre en una parte del cuerpo.", "Emisión espontánea de algo, como luz, calor o electricidad.",
    "Secreto o misterio muy reservado y de difícil comprensión.", "Falta absoluta de medios para subsistir.", "Persona o cosa desconocida.", "Hecho o expresión aparentemente contradictorios.", "Mancha luminosa en el cielo compuesta por gases y polvo.",
    "Añoranza de la tierra natal o de tiempos pasados.", "Movimiento o situación confuso y agitado.", "Momento culminante o más intenso de algo.", "Falta de tranquilidad o reposo.", "Contracción involuntaria y violenta de un músculo.",
    "Discurso breve dirigido a un público.", "Insecto chupador de savia de las plantas, como el pulgón.", "Desconocido o no descubierto.", "Muy pequeño en cantidad o grado.", "Que tiene lozanía, vigor y frescura.",
    "Pensar detenidamente en algo.", "Que es agradable al paladar.", "Muy abundante y fértil.", "Camino estrecho y de poca importancia.", "Inquietud, angustia.",
    "Estado de un líquido cuando hierve y desprende burbujas de vapor.", "Persona que procura el bien de sus semejantes.", "Lenguaje oscuro e ininteligible.", "Que huye del trato de otras personas.", "Número que expresa la relación entre dos cantidades.",
    "Alegría muy viva.", "Fiesta popular en la que se venden diversas cosas para recaudar fondos.", "Que produce dolor o aflicción.", "Mancha, especialmente en la piel.", "Persona o cosa que inevitablemente provoca la destrucción o el fracaso de otra.",
    "Besos dados como muestra de afecto.", "Que obra con perfidia, traición o falsedad.", "Ilusión o esperanza que se anhela pero es imposible de realizar.", "Que muestra reserva o falta de franqueza al hablar.", "Doctrina filosófica que afirma que solo existe el propio yo y su mente.",
    "Que está implícito en un acto o en una declaración y se sobreentiende sin expresarse claramente.", "Principio o inicio de algo, especialmente de una etapa.", "Que tiene virulencia, especialmente en el caso de una enfermedad o un agente infeccioso.", "Película o relato del oeste estadounidense.", "Odio, repugnancia u hostilidad hacia los extranjeros.",
    "Lugar deshabitado y sin cultivo.", "Edificio de la antigua Mesopotamia, de forma piramidal y dedicado al culto religioso.", "Bastante, en grado sumo.", "Parte central y más importante de algo.", "Cosa insignificante o de poco valor.", "Amparo o protección que se ofrece a alguien.",
    "De lado, oblicuamente.", "Mareo o desmayo pasajero.", "Estar tendido o extendido.", "Persona que tiene supuestamente el don de descubrir agua subterránea u otros objetos ocultos mediante varillas u otros medios."

];
// Pedimos un número al azar que nos sirva como indice para obtener una palabra de forma aleatoria
const indice = Math.floor(Math.random() * palabras.length)
// Mostramos la definicion
console.log(`La palabra es: ${definiciones[indice]}`)
// Mostramos las pistas
function ocultarLetras(palabra) {
    const letras = palabra.split(''); // ["f","a","n","t","a","s","m","a"]
    const letrasVisibles = new Set();

    // Elegir aleatoriamente cuántas letras dejar visibles (entre 2 y 3)
    const numLetrasVisibles = Math.floor(Math.random() * 2) + 2;

    // Elegir aleatoriamente qué letras dejar visibles
    while (letrasVisibles.size < numLetrasVisibles) {
        const indice = Math.floor(Math.random() * letras.length);
        letrasVisibles.add(indice);
    }

    // Crear la palabra oculta
    let palabraOculta = '';
    for (let i = 0; i < letras.length; i++) {
        if (letrasVisibles.has(i)) {
            palabraOculta += letras[i];
        } else {
            palabraOculta += '_';
        }
    }

    return palabraOculta;
}
console.log(ocultarLetras(palabras[indice]))

// definimos un bucle while para que el programa nos pregunte siempre que no acertemos
let time = true;
let palabraUsuario = "";
let validator = (palabraUsuario !== palabras[indice]) && time // true and true
setTimeout(()=>{time= false},30000)
while (validator) {
    palabraUsuario = prompt("Ingrese su respuesta: ");
    palabraUsuario != palabras[indice] ? console.log("Try Again!") : console.log("Bien hecho!");
    if (palabraUsuario === palabras[indice]) {
        time = false
        console.log("Bien hecho!");
        break
    } else {
        console.log("Try Again!")
    }
}

console.log(`La palabra era: ${palabras[indice]}`)

