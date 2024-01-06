const sumar = (a, b) => {
    return a + b;
}
const restar = (a, b) => {
    return a - b;
}
const multiplicar = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}

// console.log(sumar(1, 2)); // 3
// console.log(restar(1, 2)); // -1
// console.log(multiplicar(1, 2)); // 2 
// console.log(divide(1, 2)); // 0.5

module.exports = {
    sumar,
    restar,
    multiplicar,
    divide,

}