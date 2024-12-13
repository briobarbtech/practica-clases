function collatz(num) {

    if (num % 2 === 0) return num / 2
    else return (num * 3) + 1

}
let num = 365
while (num !== 1) {
    num = collatz(num)
    console.log(num)
}