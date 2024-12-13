/* 6_ Tomando parte del código anteriormente desarrollado, vamos a variar un poco. Y esta vez vamos a pedir que nos devuelva el número pero en todas sus variables posibles. Es decir:
123
132
213
231
312
321

 */
let num = ['1','2','3']
num = num.toString().split('')
function permutar(num) {
    console.log(num[0] + num[1] + num[2])
    console.log(num[0] + num[2] + num[1])
    console.log(num[1] + num[0] + num[2])
    console.log(num[1] + num[2] + num[0])
    console.log(num[2] + num[0] + num[1])
    console.log(num[2] + num[1] + num[0])
}

//permutar(num)

function permutarMejorado(num) {
    if (num.length === 1) return [num]


    for (let i = 0; i < num.length; i++) {
        let numActual = num[i]
        let numerosRestantes = num.slice(0,i).concat(i+1)
        let permutacionesRestantes = permutarMejorado(numerosRestantes)
        for (let j = 1; j < 3; j++) {
                     
        }
    }

}

permutarMejorado(num)
/*
123
132
213
231
312
321
*/